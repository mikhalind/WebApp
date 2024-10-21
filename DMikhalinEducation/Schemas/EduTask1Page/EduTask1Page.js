define("EduTask1Page", ["ProcessModuleUtilities"], function(ProcessModuleUtilities) {
	return {
		entitySchemaName: "EduTask",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "EduTaskFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "EduTask"
				}
			},
			"EduSchemaSubtaskDetail": {
				"schemaName": "EduSchema2d5d513eDetail",
				"entitySchemaName": "EduTask",
				"filter": {
					"detailColumn": "EduParentTask",
					"masterColumn": "Id"
				}
			},
			"ActivityDetailTask": {
				"schemaName": "ActivityDetailV2",
				"entitySchemaName": "Activity",
				"filter": {
					"detailColumn": "EduTask",
					"masterColumn": "Id"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"EduSpecialist": {
				"52ac72aa-3442-4fa7-97d6-b8f7bf3b5f48": {
					"uId": "52ac72aa-3442-4fa7-97d6-b8f7bf3b5f48",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c3ffbd1-f33c-4b41-bab7-d85abc8e1e42",
								"dataValueType": 10
							}
						}
					]
				},
				"50df6426-5de4-4b9e-b952-cf598ca0694a": {
					"uId": "50df6426-5de4-4b9e-b952-cf598ca0694a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c3ffbd1-f33c-4b41-bab7-d85abc8e1e42",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduProject": {
				"17987e12-b3f2-4013-bb35-87f9997ffb6f": {
					"uId": "17987e12-b3f2-4013-bb35-87f9997ffb6f",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduPlannedStartDate": {
				"f683ddb8-8820-40f2-a399-f874d2a677be": {
					"uId": "f683ddb8-8820-40f2-a399-f874d2a677be",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduPlannedDueDate": {
				"06bfcb66-f1af-4942-94f6-ec7159bd151c": {
					"uId": "06bfcb66-f1af-4942-94f6-ec7159bd151c",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduFactStartDate": {
				"b160eead-2d2a-48f1-9c34-6ec6891add92": {
					"uId": "b160eead-2d2a-48f1-9c34-6ec6891add92",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c3ffbd1-f33c-4b41-bab7-d85abc8e1e42",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				},
				"35c68109-284d-4886-b4fb-d2456342c71b": {
					"uId": "35c68109-284d-4886-b4fb-d2456342c71b",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c3ffbd1-f33c-4b41-bab7-d85abc8e1e42",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduFactDueDate": {
				"32e1986c-4e2f-49f1-a736-d04cd4a29df2": {
					"uId": "32e1986c-4e2f-49f1-a736-d04cd4a29df2",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 0,
					"logical": 1,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8c3ffbd1-f33c-4b41-bab7-d85abc8e1e42",
								"dataValueType": 10
							}
						},
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				},
				"f2a0700d-c8e2-4755-b122-96566253c8b9": {
					"uId": "f2a0700d-c8e2-4755-b122-96566253c8b9",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 6,
							"formula": {
								"type": 2,
								"dataType": 7,
								"code": "GETDATE",
								"arguments": []
							}
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduAccount": {
				"e8724787-2c22-4e32-ba4d-18e4334ce965": {
					"uId": "e8724787-2c22-4e32-ba4d-18e4334ce965",
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
				}
			},
			"EduCost": {
				"5b472ca1-d48d-4a9b-8478-9c92974e2aa9": {
					"uId": "5b472ca1-d48d-4a9b-8478-9c92974e2aa9",
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
								"attribute": "EduProject"
							}
						}
					]
				},
				"2b0bba0f-fb96-4d24-b412-4c6860935b26": {
					"uId": "2b0bba0f-fb96-4d24-b412-4c6860935b26",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduDecision": {
				"1e3ae070-bad8-4af0-95d8-76b850f25bdf": {
					"uId": "1e3ae070-bad8-4af0-95d8-76b850f25bdf",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduProject",
								"attributePath": "EduProjectStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "b5c9c5a5-889e-4629-8a77-258942a4b3c0",
								"dataValueType": 10
							}
						}
					]
				},
				"28aa5d9f-c4ad-4b83-8b98-f8511f11e1fb": {
					"uId": "28aa5d9f-c4ad-4b83-8b98-f8511f11e1fb",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				},
				"a938f011-64a2-4124-aaa8-aa940b5c7eaa": {
					"uId": "a938f011-64a2-4124-aaa8-aa940b5c7eaa",
					"enabled": true,
					"removed": true,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduRating": {
				"0ae0ff07-1a4f-4c7e-b64c-b24f3b17f0a9": {
					"uId": "0ae0ff07-1a4f-4c7e-b64c-b24f3b17f0a9",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 2,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduProject",
								"attributePath": "EduProjectStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "b5c9c5a5-889e-4629-8a77-258942a4b3c0",
								"dataValueType": 10
							}
						}
					]
				},
				"074a69ca-ffac-4264-b648-42fca0a80c6a": {
					"uId": "074a69ca-ffac-4264-b648-42fca0a80c6a",
					"enabled": true,
					"removed": false,
					"ruleType": 0,
					"property": 1,
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "7564e99c-34ab-417d-aef7-3c478735eb3d",
								"dataValueType": 10
							}
						}
					]
				}
			},
			"EduService": {
				"8758ecaa-51d0-467d-8fd3-602bb230cf33": {
					"uId": "8758ecaa-51d0-467d-8fd3-602bb230cf33",
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
								"attribute": "EduProject"
							}
						}
					]
				},
				"cdc32616-3a7a-4ffa-9349-e61220e2769c": {
					"uId": "cdc32616-3a7a-4ffa-9349-e61220e2769c",
					"enabled": true,
					"removed": false,
					"ruleType": 3,
					"populatingAttributeSource": {
						"expression": {
							"type": 1,
							"attribute": "EduProject",
							"attributePath": "EduService"
						}
					},
					"logical": 0,
					"conditions": [
						{
							"comparisonType": 3,
							"leftExpression": {
								"type": 1,
								"attribute": "EduTaskStatus"
							},
							"rightExpression": {
								"type": 0,
								"value": "8532e0e1-10e7-4ae7-865d-106ce5cdfc15",
								"dataValueType": 10
							}
						}
					]
				},
				"f5ba42eb-d576-4f84-a1da-b8e638b9290c": {
					"uId": "f5ba42eb-d576-4f84-a1da-b8e638b9290c",
					"enabled": true,
					"removed": false,
					"ruleType": 1,
					"baseAttributePatch": "EduServiceStatus",
					"comparisonType": 3,
					"autoClean": false,
					"autocomplete": false,
					"type": 0,
					"value": "c36d1049-6be2-420d-b5e0-f70a108e9b81",
					"dataValueType": 10
				}
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			/// Переопределение базового метода, срабатывающего после окончания инициализации схемы объекта страницы записи
			onEntityInitialized: function() {
				// Вызов родительской реализации метода
				this.callParent(arguments);
				// Код проставляется в поле, если создается новый элемент или копия существующего
				if (this.isAddMode() || this.isCopyMode()) {
					// Вызов базового метода, который генерирует номер по ранее заданной маске
					this.getIncrementCode(function(response) {
						// Сгенерированный номер присваивается в колонку [EduNumber]
						this.set("EduNumber", response);
					});
				}
			},
			
			// Проверка статуса задачи: отменен или нет (для кнопки)
			isProjectNotCanceled: function() {
                const status = this.get("EduTaskStatus");
                return Ext.isEmpty(status) || status.value != "d6540d57-2ecf-49e0-948c-305e4de1467f";
            },
			
			// обработка события нажатия на кнопку "отмена проекта"
			onCancelEventClick: function() {
				this.showConfirmationDialog("Вы уверены, что хотите отменить задачу?", 
											function(result) {
												if (result === BPMSoft.MessageBoxButtons.YES.returnCode) {
        											this.set("EduTaskStatus", { 
														value: "d6540d57-2ecf-49e0-948c-305e4de1467f",
														displayValue: "Отменена" 
													});
													this.save();
													this.isProjectNotCanceled();
													var args = {
    													sysProcessName: "EduProcess_2e79dcd",
    													parameters: { TaskId: this.get("Id") }
													};
													ProcessModuleUtilities.executeProcess(args);
     											} else { }
											},
											["Yes", "No"]);                
			},
			
			/// метод добавления пользовательских валидаторов
			setValidationConfig: function() {
				// Вызов реализации родительского обработчика
				this.callParent(arguments);
				// Добавление обработчика валидации к полю "Стоимость, руб."
				this.addColumnValidator("EduCost", this.costValidator);
				// Добавление обработчика валидации к полю "Фактическая дата завершения" (начало < конец)
				this.addColumnValidator("EduFactDueDate", this.factDatesCompareValidator);
				// Добавление обработчика валидации к полю "Плановая дата завершения" (начало < конец)
				this.addColumnValidator("EduPlannedDueDate", this.plannedDatesCompareValidator);
				// Добавление обработчика валидации к полю "Фактическая дата начала" (начало > текущая дата)
				this.addColumnValidator("EduFactStartDate", this.factStartDateValidator);
				// Добавление обработчика валидации к полю "Плановая дата начала (начало > текущая дата)
				this.addColumnValidator("EduPlannedStartDate", this.plannedStartDateValidator);
			},
 
			/// метод валидации стоимости
			costValidator: function(value) {
				/* Переменная для хранения сообщения об ошибке валидации. */
				let invalidMessage = "";
				/* Переменная для хранения номера паспорта. */
				const cost = value || this.get("EduCost");
				/* Если поле не пустое и введено значение отличное от маски, добавлять сообщение об ошибке. */
				if (!Ext.isEmpty(cost) && cost < 0) {
					invalidMessage = "Стоимость задачи не может быть отрицательной";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			/// метод валидации сравнения дат (факт)
			factDatesCompareValidator: function(value) {
				// Переменная для хранения сообщения об ошибке валидации
				let invalidMessage = "";
				// Переменная для хранения дат
				const startDate = this.get("EduFactStartDate");
				const dueDate = this.get("EduFactDueDate");
				// Если поле не пустое и введено значение отличное от маски, добавлять сообщение об ошибке
				if (startDate > dueDate) {
					invalidMessage = "Дата окончания не может быть раньше начала";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			/// метод валидации дат (план)
			plannedDatesCompareValidator: function(value) {
				// Переменная для хранения сообщения об ошибке валидации
				let invalidMessage = "";
				// Переменная для хранения дат
				const startDate = this.get("EduPlannedStartDate");
				const dueDate = this.get("EduPlannedDueDate");
				// Если поле не пустое и введено значение отличное от маски, добавлять сообщение об ошибке
				if (startDate > dueDate) {
					invalidMessage = "Дата окончания не может быть раньше начала";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// функция проверки корректности введения даты начала (факт)
			factStartDateValidator: function(value) {
				let invalidMessage = "";
				let startDate = this.get("EduFactStartDate");
				let nowDate = new Date();
				if (!startDate)
					return { invalidMessage: invalidMessage };
				startDate.setHours(0,0,0,0);
				nowDate.setHours(0,0,0,0);
			    if (startDate.getTime() < nowDate.getTime()) {
					invalidMessage = "Дата начала не может быть раньше текущей даты";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// функция проверки корректности введения даты начала (план)
			plannedStartDateValidator: function(value) {
				let invalidMessage = "";
				let startDate = this.get("EduPlannedStartDate");
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
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "CancelTaskButton",
				"values": {
					"itemType": 5,
					"caption": "Отменить задачу",
					"click": {
						"bindTo": "onCancelEventClick"
					},
					"enabled": {
						"bindTo": "isTaskNotCanceled"
					},
					"style": "default"
				},
				"parentName": "LeftContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "STRINGed9a5f63-d53b-47b9-ba8f-49e415b04b42",
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
				"name": "EduName89466fd6-11e1-4aed-a49c-2aae48ce9254",
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
				"name": "LOOKUPa1acfe4a-83ea-4750-8946-87df0309b818",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduAuthor",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EduCostcf729f36-3dec-42cf-a079-8325d72e9458",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduCost"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "LOOKUP8140e662-4814-4780-9043-5b76eb66aa80",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduAccount",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "LOOKUPc85e30ae-0c30-4f43-a8f8-bb7e243a1797",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "ProfileContainer"
					},
					"tip": {
						"content": "Приоритет выставляется автоматически в зависимости от стоимости (до 100 тыс.руб / 100-500 тыс.руб / от 500 тыс.руб.)",
						"displayMode": "wide"
					},
					"bindTo": "EduPriority",
					"enabled": false,
					"contentType": 3
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "LOOKUPa34e49f9-5f6e-4918-9055-44451ba5ceed",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduService",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "LOOKUPf347431a-df82-479a-9afc-9d5ce37a55da",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduParentTask",
					"enabled": false,
					"contentType": 5
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "LOOKUP47516f1c-f875-45cb-a979-b4de7d8997d6",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "EduSpecialist",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "LOOKUP7f62dce3-fbd8-4cdb-bf62-70697eec1291",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "EduProject",
					"enabled": true,
					"contentType": 5
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "STRING6121dbba-d9c7-423b-b16f-7f5bc34729c7",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 2,
						"column": 0,
						"row": 2,
						"layoutName": "Header"
					},
					"bindTo": "EduDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "TabLifecycle",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabLifecycleTabCaption"
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
				"name": "TabLifecycleGroupTerms",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabLifecycleGroupTermsGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabLifecycle",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TabLifecycleGridLayout49d17bcc",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabLifecycleGroupTerms",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduPlannedStartDatebf0dbd61-2cad-44a0-8e50-996296b48d9e",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabLifecycleGridLayout49d17bcc"
					},
					"bindTo": "EduPlannedStartDate"
				},
				"parentName": "TabLifecycleGridLayout49d17bcc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduPlannedDueDatee01f3734-81c5-4ee6-a6fa-207b5a1b2d95",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 8,
						"row": 0,
						"layoutName": "TabLifecycleGridLayout49d17bcc"
					},
					"bindTo": "EduPlannedDueDate"
				},
				"parentName": "TabLifecycleGridLayout49d17bcc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduFactStartDate0b8dae25-6814-47c5-8278-d4b7cdcb3615",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "TabLifecycleGridLayout49d17bcc"
					},
					"bindTo": "EduFactStartDate",
					"enabled": false
				},
				"parentName": "TabLifecycleGridLayout49d17bcc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EduFactDueDate1f2f5e6b-3d33-48f3-b041-0fa22528a248",
				"values": {
					"layout": {
						"colSpan": 7,
						"rowSpan": 1,
						"column": 8,
						"row": 1,
						"layoutName": "TabLifecycleGridLayout49d17bcc"
					},
					"bindTo": "EduFactDueDate",
					"enabled": false
				},
				"parentName": "TabLifecycleGridLayout49d17bcc",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "TabLifecycleGroupResults",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabLifecycleGroupResultsGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "TabLifecycle",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabLifecycleGridLayout03d1b07c",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "TabLifecycleGroupResults",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduRating0d6e1f18-193f-4d47-8521-2187a0818e02",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "TabLifecycleGridLayout03d1b07c"
					},
					"bindTo": "EduRating"
				},
				"parentName": "TabLifecycleGridLayout03d1b07c",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduDecision1063c2a9-5c6c-477a-a65b-061342c2425d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 2,
						"column": 0,
						"row": 1,
						"layoutName": "TabLifecycleGridLayout03d1b07c"
					},
					"bindTo": "EduDecision",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "TabLifecycleGridLayout03d1b07c",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TabDetailsLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabDetailsLabelTabCaption"
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
				"name": "EduSchemaSubtaskDetail",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabDetailsLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "ActivityDetailTask",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				},
				"parentName": "TabDetailsLabel",
				"propertyName": "items",
				"index": 1
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
