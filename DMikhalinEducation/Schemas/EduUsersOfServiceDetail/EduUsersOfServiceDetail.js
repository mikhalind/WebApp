define("EduUsersOfServiceDetail", ["ConfigurationEnums", "ConfigurationGrid", "ConfigurationGridGenerator",
	"ConfigurationGridUtilitiesV2"], function(ConfigurationEnums) {
	return {
		entitySchemaName: "EduUsersOfService",
		attributes: {
			"IsEditable": {
				dataValueType: BPMSoft.DataValueType.BOOLEAN,
				type: BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
				value: true
			}
		},
		mixins: {
			ConfigurationGridUtilitiesV2: "BPMSoft.ConfigurationGridUtilitiesV2",
			ConfigurationGridUtilities: "BPMSoft.ConfigurationGridUtilities"
		},
		methods: {
			onActiveRowAction: function(buttonTag, primaryColumnValue) {
				this.mixins.ConfigurationGridUtilitiesV2.onActiveRowAction.call(this, buttonTag, primaryColumnValue);
			},
			
			/**
			 * Конфигурирует и отображает модальное окно справочника. 
			 */
			openContactLookup: function() {
				/* Конфигурационный объект справочника, используемого в детали. */
				let config = {
					/* Название схемы объекта, записи которого будут отображены в справочнике. */
					entitySchemaName: "Contact",
					/* Возможность множественного выбора. */
					multiSelect: true,
					/* Колонки, которые будут использованы в справочнике, например, для сортировки. */
					columns: ["Name", "JobTitle"]
				};
				let serviceId = this.get("MasterRecordId");
				if (this.Ext.isEmpty(serviceId)) {
					return;
				}
				/* Экземпляр класса EntitySchemaQuery. */
				let esq = this.Ext.create("BPMSoft.EntitySchemaQuery", {
					/* Установка корневой схемы. */
					rootSchemaName: this.entitySchemaName
				});
				/* Добавление колонки Id. */
				esq.addColumn("Id");
				/* Добавление колонки Id из схемы Contact. */
				esq.addColumn("EduUser.Id", "ContactId");
				/* Создание и добавление фильтра в коллекцию запроса, необходимого для получения записей контактов, принадлежащих текущей услуге */
				esq.filters.add("filterService", this.BPMSoft.createColumnFilterWithParameter(
					this.BPMSoft.ComparisonType.EQUAL, "EduService", serviceId));
				/* Получение всей коллекции записей и отображение ее в модальном окне справочника. */
				esq.getEntityCollection(function(result) {
					let existsContactsCollection = [];
					if (result.success) {
						result.collection.each(function(item) {
							existsContactsCollection.push(item.get("ContactId"));
						});
					}
					/* Добавление фильтра в конфигурационный объект модального окна для отображения необходимых контактов. */
					if (existsContactsCollection.length > 0) {
						let existsFilter = this.BPMSoft.createColumnInFilterWithParameters("Id",
																						   existsContactsCollection);
						existsFilter.comparisonType = this.BPMSoft.ComparisonType.NOT_EQUAL;
						existsFilter.Name = "existsFilter";
						config.filters = existsFilter;
					}
					/* Вызов модального окна справочника. */
					this.openLookup(config, this.addCallBack, this);
				}, this);
			},
			/**
			 * Обработчик события после сохранения страницы записи.
			 */
			onCardSaved: function() {
				this.openContactLookup();
			},
			/**
			 * Проверка на то создается ли новая карточка.
			 */
			checkIsNewRecord: function(masterCardState) {
				return masterCardState.state === ConfigurationEnums.CardStateV2.ADD ||
					masterCardState.state === ConfigurationEnums.CardStateV2.COPY
			},
			/**
			 * В случае если запись активности новая и еще не была сохранена, сохраняет ее, для корректного создания новых записей в справочник контактов. 
			 */
			addRecord: function() {
				let masterCardState = this.sandbox.publish("GetCardState", null, [this.sandbox.id]);
				let isNewRecord = (this.checkIsNewRecord(masterCardState));
				if (isNewRecord) {
					let args = {
						isSilent: true,
						messageTags: [this.sandbox.id]
					};
					this.sandbox.publish("SaveRecord", args, [this.sandbox.id]);
					return;
				}
				this.openContactLookup();
			},
			/**
			 * Добавление выбранных контактов. 
			 */
			addCallBack: function(args) {
				/* Экземпляр класса пакетного запроса BatchQuery, используемого для оптимизации. */
				let bq = this.Ext.create("BPMSoft.BatchQuery");
				let serviceId = this.get("MasterRecordId");
				/* Коллекция выбранных в справочнике документов. */
				this.selectedRows = args.selectedRows.getItems();
				/* Коллекция, передаваемая в запрос. */
				this.selectedItems = [];
				/* Копирование необходимых данных. */
				this.selectedRows.forEach(function(item) {
					item.ServiceId = serviceId;
					item.ContactId = item.value;
					bq.add(this.getContactInsertQuery(item));
					this.selectedItems.push(item.value);
				}, this);
				/* Выполнение пакетного запроса, если он не пустой. */
				if (bq.queries.length) {
					this.showBodyMask();
					bq.execute(this.onContactInsert, this);
				}
			},
			/**
			 * Возвращает запрос на добавление выбранного контакта.
			 */
			getContactInsertQuery: function(item) {
				let insert = Ext.create("BPMSoft.InsertQuery", {
					rootSchemaName: this.entitySchemaName
				});
				insert.setParameterValue("EduService", item.ServiceId, this.BPMSoft.DataValueType.GUID);
				insert.setParameterValue("EduUser", item.ContactId, this.BPMSoft.DataValueType.GUID);
				return insert;
			},
			/**
			 * Метод, вызываемый при добавлении записей в реестр детали. 
			 */
			onContactInsert: function(response) {
				debugger;
				this.hideBodyMask();
				this.beforeLoadGridData();
				let filterCollection = [];
				response.queryResults.forEach(function(item) {
					filterCollection.push(item.id);
				});
				let esq = Ext.create("BPMSoft.EntitySchemaQuery", {
					rootSchemaName: this.entitySchemaName
				});
				this.initQueryColumns(esq);
				esq.filters.add("recordId", BPMSoft.createColumnInFilterWithParameters("Id", filterCollection));
				/* Создание модели представления. */
				esq.on("createviewmodel", this.createViewModel, this);
				esq.getEntityCollection(function(response) {
					this.afterLoadGridData();
					if (response.success) {
						let responseCollection = response.collection;
						this.prepareResponseCollection(responseCollection);
						this.getGridData().loadAll(responseCollection);
					}
				}, this);
			},
			/* Скрыть пункт меню «Копировать» и «Изменить», так как в данном примере эта функциональность реализована не будет. */
			getCopyRecordMenuItem: BPMSoft.emptyFn,
			getEditRecordMenuItem: BPMSoft.emptyFn
		},
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "DataGrid",
				"values": {
					"className": "BPMSoft.ConfigurationGrid",
					"generator": "ConfigurationGridGenerator.generatePartial",
					"generateControlsConfig": {"bindTo": "generateActiveRowControlsConfig"},
					"changeRow": {"bindTo": "changeRow"},
					"unSelectRow": {"bindTo": "unSelectRow"},
					"onGridClick": {"bindTo": "onGridClick"},
					"activeRowActions": [
						{
							"className": "BPMSoft.Button",
							"style": this.BPMSoft.controls.ButtonEnums.style.TRANSPARENT,
							"tag": "save",
							"markerValue": "save",
							"imageConfig": {"bindTo": "Resources.Images.SaveIcon"}
						},
						{
							"className": "BPMSoft.Button",
							"style": this.BPMSoft.controls.ButtonEnums.style.TRANSPARENT,
							"tag": "cancel",
							"markerValue": "cancel",
							"imageConfig": {"bindTo": "Resources.Images.CancelIcon"}
						},
						{
							"className": "BPMSoft.Button",
							"style": this.BPMSoft.controls.ButtonEnums.style.TRANSPARENT,
							"tag": "remove",
							"markerValue": "remove",
							"imageConfig": {"bindTo": "Resources.Images.RemoveIcon"}
						}
					],
					"initActiveRowKeyMap": {"bindTo": "initActiveRowKeyMap"},
					"activeRowAction": {"bindTo": "onActiveRowAction"},
					"multiSelect": {"bindTo": "MultiSelect"}
				}
			}
		]/**SCHEMA_DIFF*/
	};
});