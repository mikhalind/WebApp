define("EduEduQuota5fc4ef1bPage", [], function() {
	return {
		entitySchemaName: "EduQuota",
		attributes: {},
		modules: {},
		details: {},
		businessRules: {},
		
		methods: {
			// Установка пользовательских валидаторов
			setValidationConfig: function() {
				this.callParent(arguments);
				this.addColumnValidator("EduValue", this.quotaValueValidator);
			},
			
			// Валидация поля "квота"
			quotaValueValidator: function(value) {
				let invalidMessage = "";
				const val = value || this.get("EduValue");
				// Если поле выходит за промежутки 0-100, добавлять сообщение об ошибке
				if (val < 0 || val > 100) {
					invalidMessage = "Квота должна быть в пределах от 0 до 100";
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
				"name": "EduName84bf82a9-d8d4-404c-aacb-22a1f2a60e2d",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduName",
					"enabled": true
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduStartDate1cd94843-4d04-483c-8c28-bd0080684bb6",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduStartDate"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduDueDateb52a8beb-cf41-4248-8a22-9f99df1e8fc9",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 2,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduDueDate"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "EduApproved09eadff5-c4a5-4b64-83cd-908f63e68c4b",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 4,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduApproved"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "EduValuea3598ffd-1698-40af-b538-681235c480a2",
				"values": {
					"layout": {
						"colSpan": 24,
						"rowSpan": 1,
						"column": 0,
						"row": 3,
						"layoutName": "ProfileContainer"
					},
					"bindTo": "EduValue"
				},
				"parentName": "ProfileContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "EduProject32fb3f8e-da29-431a-82a5-4cafb96864c8",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Header"
					},
					"bindTo": "EduProject"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "EduDescription6716ec01-ab6f-4138-98b1-0c786bc1a57b",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
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
				"index": 1
			},
			{
				"operation": "insert",
				"name": "EduSpecialistd7fb534e-dfee-4743-8d04-d243a28ab584",
				"values": {
					"layout": {
						"colSpan": 11,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Header"
					},
					"bindTo": "EduSpecialist"
				},
				"parentName": "Header",
				"propertyName": "items",
				"index": 2
			}
		]
	};
});
