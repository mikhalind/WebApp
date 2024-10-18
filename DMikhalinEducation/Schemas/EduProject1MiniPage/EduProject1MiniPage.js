define("EduProject1MiniPage", [], function() {
	return {
		entitySchemaName: "EduProject",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{
			"EduDescription": {
				"95d1874e-6d28-4fc8-98aa-2f1c1dbb26f5": {
					"uId": "95d1874e-6d28-4fc8-98aa-2f1c1dbb26f5",
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
			}
		}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			// проставляется автоматический номер проекта
			onEntityInitialized: function() {
				this.callParent(arguments);
				// Код проставляется в поле, если создается новый элемент или копия существующего
				if (this.isAddMode() || this.isCopyMode()) {
					// Вызов базового метода, который генерирует номер по ранее заданной маске
					this.getIncrementCode(function(response) {
						// Сгенерированный номер присваивается в колонку [EduNumber]
						this.set("EduNumber", response);
					});
				}
			}
		},
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "merge",
				"name": "HeaderContainer",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0
					}
				}
			},
			{
				"operation": "insert",
				"name": "HeaderColumnContainer",
				"values": {
					"itemType": 6,
					"caption": {
						"bindTo": "getPrimaryDisplayColumnValue"
					},
					"labelClass": [
						"label-in-header-container"
					],
					"visible": {
						"bindTo": "isNotAddMode"
					}
				},
				"parentName": "HeaderContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduNumber7b8b4f26-974f-46a8-b0d9-95eaf563758a",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduNumber"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduName07533696-7e8b-4760-8029-2f3a63291982",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EduManagerab00583d-9b41-4f7a-ae43-57dbe21a79cf",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduManager"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EduServicefab96cda-1bba-4867-b079-aa393ddd26e7",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduService"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EduDescriptionbcd932e6-6d04-4070-96ff-9fb050204044",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EduNumberd20efb79-07c3-40dd-8122-c4a9aa51845c",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduNumber"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "EduName1bd5f018-0c4b-4f50-be46-b52da2c8a5eb",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduName"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "EduManagera53ff90e-ecb4-48bf-bfca-8cafaeae119e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduManager"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "EduStartDate141c389f-e8ec-4800-aa9f-f17daa994e88",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduStartDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "EduDueDate207406d8-0fa1-4886-8ec7-a137ed0904b7",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 4,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduDueDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 10
			},
			{
				"operation": "insert",
				"name": "EduCost25112774-e390-4edd-9107-4ca7d3bd6841",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 5,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduCost"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "EduDescription6663d9cd-1206-4794-83d8-2fb0af497aa0",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 6,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isViewMode"
					},
					"bindTo": "EduDescription",
					"enabled": true,
					"contentType": 0
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 12
			}
		]/**SCHEMA_DIFF*/
	};
});
