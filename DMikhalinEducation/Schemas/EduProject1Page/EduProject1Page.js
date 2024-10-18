define("EduProject1Page", [], function() {
	return {
		entitySchemaName: "EduProject",
		
		attributes: {
			// Атрибут, зависящий от поля "Состояние проекта"
			"ProjectStatusValue": {
				"dataValueType": this.BPMSoft.DataValueType.TEXT,
				"type": this.BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
    			"dependencies": [ {
        			"columns": [ "EduProjectStatus" ],
        			"methodName": "updateProjectStatus"
      			}]
  			}			
		},
			
		// Конфигурационный объект сообщений
		messages: {		
			// Сообщение для отправки состояния проекта из страницы в секцию
			"SendProjectStatus": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.PUBLISH
			},
			
			// Сообщение-запрос из секции на отмену проекта
			"CancelProject": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.SUBSCRIBE
			}
		},
				
		modules: { },
				
		details: {
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "EduProjectFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "EduProject"
				}
			},
			"EduSchemaDetailQuotas": {
				"schemaName": "EduSchema1c47b243Detail",
				"entitySchemaName": "EduQuota",
				"filter": {
					"detailColumn": "EduProject",
					"masterColumn": "Id"
				}
			},
			"EduSchemaDetailTasks": {
				"schemaName": "EduSchema2d5d513eDetail",
				"entitySchemaName": "EduTask",
				"filter": {
					"detailColumn": "EduProject",
					"masterColumn": "Id"
				}
			},
			"ActivityDetailTask": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "EduProject",
					"masterColumn": "Id"
				}
			}
		},
		
		businessRules: {
			"EduManager": {
				"e6397955-952e-45d5-be1f-caea86678f83": {
					"uId": "e6397955-952e-45d5-be1f-caea86678f83",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "EduAccount",
							"attributePath": "Owner"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "EduAccount"
							}
						}
					]
				}
			},
			"EduDescription": {
				"49f7a5cd-ebdc-49da-ba92-31fe9ebd55c2": {
					"uId": "49f7a5cd-ebdc-49da-ba92-31fe9ebd55c2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "EduService"
							}
						}
					]
				},
				"b883f5fd-a800-46a2-b2ac-d547930403d2": {
					"uId": "b883f5fd-a800-46a2-b2ac-d547930403d2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "EduService"
							}
						}
					]
				},
				"69ebdfbb-01fe-47b0-a99e-e20a562ee940": {
					"uId": "69ebdfbb-01fe-47b0-a99e-e20a562ee940",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "EduService",
							"attributePath": "EduDescription"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 2,
							"leftExpression": {
								"type": 1,
								"attribute": "EduService"
							}
						}
					]
				}
			},
			"EduOwner": {
				"2c424c6b-86b6-4a10-9cef-3c3f775f5647": {
					"uId": "2c424c6b-86b6-4a10-9cef-3c3f775f5647",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 1,
							"leftExpression": {
								"type": 1,
								"attribute": "EduService"
							}
						}
					]
				}
			}
		},
				
		methods: {
			// Переопределение базового метода, вызывающегося при инициализации схемы страницы
			init: function () {
				// Родительская реализация метода
				this.callParent(arguments);
				// Подписка на сообщение-запрос об отмене текущего проекта
				this.sandbox.subscribe("CancelProject", this.processCancelling, this, ["msg1"]);
			},
			
			// Метод, вызывающийся при изменении поля EduProjectStatus
			updateProjectStatus: function() {
				// Публикация сообщения с актуальным состоянием проекта
				publishSendProjectStatus();
			},
			
			// Обработчик запроса на отмену текущего проекта
			processCancelling: function() {
				this.set("EduProjectStatus", 
						 { value: "ce80ba52-2b99-45ba-b027-5afabd5655bd",
	                       displayValue: "Отменен",
	                	 });
                this.save();
			},
			
			// Метод, публикующий сообщение с текущим состоянием проекта
			publishSendProjectStatus: function () {
				let arg = this.get("EduProjectStatus");
				this.sandbox.publish("SendProjectStatus", arg, ["msg1"]);
			},
			
			// Проверка статуса проекта: отменен или нет (для кнопки)
			isProjectNotCanceled: function() {
                const status = this.get("EduProjectStatus");
                return Ext.isEmpty(status) || status.value != "ce80ba52-2b99-45ba-b027-5afabd5655bd";
            },
			
			// Переопределение базового метода, срабатывающего после окончания инициализации схемы объекта страницы записи
			onEntityInitialized: function() {
				// Вызывается родительская реализация метода
				this.callParent(arguments);
				
				// Первичное оповещение раздела о состоянии проекта (для кнопки раздела)
				this.publishSendProjectStatus();
				
				// Код проставляется в поле, если создается новый элемент или копия существующего
				if (this.isAddMode() || this.isCopyMode()) {
					// Вызов базового метода, который генерирует номер по ранее заданной маске
					this.getIncrementCode(function(response) {
						// Сгенерированный номер присваивается в колонку [EduNumber]
						this.set("EduNumber", response);
					});
				}
			},
			
			// обработка события нажатия на кнопку "отмена проекта"
			onCancelEventClick: function() {
				// установка поля "статус проекта" текущей записи в "Отменен"
				this.set("EduProjectStatus", 
						 { value: "ce80ba52-2b99-45ba-b027-5afabd5655bd",
	                       displayValue: "Отменен",
	                	 });
                // Сохранение данных текущей записи
                this.save();
			},
			
			// Метод добавления пользовательских валидаторов
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("EduCost", this.costValidator);
				this.addColumnValidator("EduDueDate", this.dueDateValidator);
				this.addColumnValidator("EduStartDate", this.startDateValidator);
			},
			
			// функция проверки неотрицательности введенной суммы
			costValidator: function(value) {
				// Переменная для хранения сообщения об ошибке валидации
				let invalidMessage = "";
				// Переменная для хранения стоимости проекта */
				const cost = value || this.get("EduCost");
				// Если поле не пустое и отрицаиельное, добавлять сообщение об ошибке. */
				if (!Ext.isEmpty(cost) && cost < 0) {
					invalidMessage = "Стоимость не может быть отрицательной";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// Функция проверки корректности введения дат начала и завершения
			dueDateValidator: function(value) {
				// Переменная для хранения сообщения об ошибке валидации
				let invalidMessage = "";
				// Переменная для хранения дат
				const startDate = this.get("EduStartDate");
				const dueDate = this.get("EduDueDate");
				// Если поле не пустое и введено значение отличное от маски, добавлять сообщение об ошибке
				if (startDate > dueDate) {
					invalidMessage = "Дата окончания не может быть раньше начала";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// Функция проверки корректности введения даты начала
			startDateValidator: function(value) {
				let invalidMessage = "";
				let startDate = this.get("EduStartDate");
				let nowDate = new Date();
				startDate.setHours(0,0,0,0);
				nowDate.setHours(0,0,0,0);
				if (startDate.getTime() < nowDate.getTime()) {
					invalidMessage = "Дата начала не может быть раньше текущей даты";
				}
				return {
					invalidMessage: invalidMessage
				};
			}

		},
		
		dataModels: {},
		
		diff: [
			{
				"operation": "insert",
				"name": "CancelProjectButton",
				"values": {
					"itemType": 5,
					"caption": "Отменить проект",
					"click": {
						"bindTo": "onCancelEventClick"
					},
					"enabled": {
						"bindTo": "isProjectNotCanceled"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRING8d1513aa-d0fa-43ba-9f26-64c33ceee9b9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduNumber",
					"enabled": false
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduNamec6d1a64a-5724-4a09-83e0-4203a1a4428c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduName"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduOwner51e0043b-cdef-446a-b56b-69062512e91f",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduOwner"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EduAccount981b1dec-4733-49f6-9daa-50ad3ecbf0ac",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduAccount"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EduManager0e00b441-6b12-41b1-8c5d-8403aaaed7c0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduManager"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EduProjectStatus5a4f1e8c-24a1-4c75-adc3-90e98ce41d2d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduProjectStatus",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EduService71369a35-2b36-4ab6-b930-6aa10177d613",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "EduService"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRINGed4aac3d-5b5b-4562-a82c-632c909a39d8",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "EduDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduProjectTabLaborcoast",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.EduProjectTabLaborcoastTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduProjectTabLaborcoastGroup1",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.EduProjectTabLaborcoastGroup1GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "EduProjectTabLaborcoast",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduProjectTabLaborcoastGridLayout00aac7a9",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "EduProjectTabLaborcoastGroup1",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduStartDate6a0dcf98-d841-4f1b-be9f-958833c24283",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "EduProjectTabLaborcoastGridLayout00aac7a9"
					},
					"bindTo": "EduStartDate"
				},
				"parentName": "EduProjectTabLaborcoastGridLayout00aac7a9",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduDueDatedd11d73f-1a22-47f0-b2ed-b76ff58fbe4a",
				"values": {
					"layout": {
						"colSpan": 5,
						"rowSpan": 1,
						"column": 6,
						"row": 0,
						"layoutName": "EduProjectTabLaborcoastGridLayout00aac7a9"
					},
					"bindTo": "EduDueDate"
				},
				"parentName": "EduProjectTabLaborcoastGridLayout00aac7a9",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "INTEGER0c853787-0b8e-4c15-bff9-bc15735bfc1f",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "EduProjectTabLaborcoastGridLayout00aac7a9"
					},
					"bindTo": "EduCost",
					"enabled": true
				},
				"parentName": "EduProjectTabLaborcoastGridLayout00aac7a9",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "INTEGER61b0db50-e22f-4bed-b3bb-a6716f891cd9",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "EduProjectTabLaborcoastGridLayout00aac7a9"
					},
					"bindTo": "EduLaborcost",
					"enabled": true
				},
				"parentName": "EduProjectTabLaborcoastGridLayout00aac7a9",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabTaskProgress",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabTaskProgressTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduSchemaDetailQuotas",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabTaskProgress",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduSchemaDetailTasks",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabTaskProgress",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ActivityDetailTask",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabTaskProgress",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "EduNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
