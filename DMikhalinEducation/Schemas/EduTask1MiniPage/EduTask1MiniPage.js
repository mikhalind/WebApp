define("EduTask1MiniPage", [], function() {
	return {
		entitySchemaName: "EduTask",
		attributes: {},
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
			// установка валидаторов полей
			setValidationConfig: function() {
				this.callParent(arguments);
				// на поле "стоимость"
				this.addColumnValidator("EduCost", this.costValidator);
				// на поле "плановая дата завершения"
				this.addColumnValidator("EduPlannedDueDate", this.dueDateValidator);
				// на поле "плановая дата начала"
				this.addColumnValidator("EduPlannedStartDate", this.startDateValidator);
			},
			
			// валидатор стоимости
			costValidator: function(value) {
				let invalidMessage = "";
				const cost = value || this.get("EduCost");
				if (!Ext.isEmpty(cost) && cost < 0)
					invalidMessage = "Стоимость не может быть отрицательной";
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// валидатор даты завершения
			dueDateValidator: function(value) {
				let invalidMessage = "";
				const startDate = this.get("EduPlannedStartDate");
				const dueDate = this.get("EduPlannedDueDate");
				if (startDate > dueDate) {
					invalidMessage = "Дата окончания не может быть раньше начала";
				}
				return {
					invalidMessage: invalidMessage
				};
			},
			
			// валидатор даты начала
			startDateValidator: function(value) {
				let invalidMessage = "";
				const startDate = this.get("EduPlannedStartDate");
				const nowDate = new Date();
				startDate.setHours(0,0,0,0);
				nowDate.setHours(0,0,0,0);
				if (startDate.getTime() < nowDate.getTime()) {
					invalidMessage = "Дата начала не может быть раньше текущей";
				}
				return {
					invalidMessage: invalidMessage
				};
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
				"name": "EduNumber18f9a5db-088f-41cf-ae0e-7b6d8e6c989f",
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
				"name": "EduName1002720b-3fea-4a3f-afdf-e025f595d51a",
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
				"name": "EduProject1df05ea2-389f-4fbc-80da-1f6e53f6fbbf",
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
					"bindTo": "EduProject"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EduDescriptionc5739db4-3433-45e8-8182-02721d22de86",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 4,
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
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EduPlannedStartDate46846ab6-d681-447c-b042-09f114673134",
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
						"bindTo": "isAddMode"
					},
					"bindTo": "EduPlannedStartDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "EduPlannedDueDate4a2bbbc1-6173-4492-9401-9e0f3485318e",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 7,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduPlannedDueDate"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "EduCosta5711510-f9e2-4e7c-b249-55e178accf9b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 8,
						"layoutName": "MiniPage"
					},
					"isMiniPageModelItem": true,
					"visible": {
						"bindTo": "isAddMode"
					},
					"bindTo": "EduCost"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "EduNumber3733fd86-1305-4658-a021-78808ce82612",
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
				"index": 8
			},
			{
				"operation": "insert",
				"name": "EduName159eeaf4-17b7-49fb-88b1-31e25e42c744",
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
				"index": 9
			},
			{
				"operation": "insert",
				"name": "EduDescriptione51201c1-ef4a-4665-ad9a-d326d6aa9ab8",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 2,
						"column": 0,
						"row": 3,
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
				"index": 10
			},
			{
				"operation": "insert",
				"name": "EduPriority7bf51f82-f7a8-45b5-b85a-6074da8fcb89",
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
					"bindTo": "EduPriority"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 11
			},
			{
				"operation": "insert",
				"name": "EduSpecialista465bb7e-a1e1-4900-9d35-3e7f25674b11",
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
					"bindTo": "EduSpecialist"
				},
				"parentName": "MiniPage",
				"propertyName": "items",
				"index": 12
			}
		]/**SCHEMA_DIFF*/
	};
});
