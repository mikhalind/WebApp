define("EduTaskd44e8c4fSection", [], function() {
	return {
		entitySchemaName: "EduTask",
		attributes: {
			// Атрибут для привязки поля enabled кнопки
			"StatusAttr": {
        		"dataValueType": this.BPMSoft.DataValueType.BOOLEAN,
				"type": this.BPMSoft.ViewModelColumnType.VIRTUAL_COLUMN,
				"value": true
			}
		},
		
		// Конфигурационный объект сообщений
		messages: {
			// Сообщение для отправки состояния проекта из страницы в секцию
			"SendTaskStatus": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			
			// Сообщение-запрос из секции на отмену проекта
			"CancelTask": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.PUBLISH
			}
		},
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[{
                    "operation": "insert",
                    "parentName": "CombinedModeActionButtonsCardContainer",
                    "propertyName": "items",
                    "name": "CancelTaskButton",
                    "values": {
                          "itemType": BPMSoft.ViewItemType.BUTTON,
                          "caption": "Отменить задачу!",
                          "click": { bindTo: "onCancelEventClick" },
                          "enabled": { bindTo: "StatusAttr" },
                          "style": BPMSoft.controls.ButtonEnums.style.DEFAULT
                    }
              }]/**SCHEMA_DIFF*/,
		methods: {
			// Переопределение базового метода, вызывающегося при инициализации схемы страницы
			init: function() {
				// Вызов родительской реализации метода
				this.callParent(arguments);
				// Подписка на получение статуса проекта
				this.sandbox.subscribe("SendTaskStatus", this.processMessage, this, ["msg1"]);
				console.log("Подписка на получение состояния задачи");
			},	
			
			// Обработка полученного сообщения со статусом проекта
			processMessage: function(args) {
				console.log("Обработка полуенного статуса");
				this.isTaskNotCanceled(args.value);
			},
			
			// Метод изменения атрибута в зависимости от полученного сообщения
			isTaskNotCanceled: function(arg) {
				if (arg == "862e24d2-9525-42b3-83ef-84866bfc1557" || // если отменен
				    arg == "7564e99c-34ab-417d-aef7-3c478735eb3d") // если завершен
					this.set("StatusAttr", false);
				else
					this.set("StatusAttr", true);
            },
			
			// Обработчик события нажатия на кнопку
			onCancelEventClick: function() {
				this.showConfirmationDialog("Вы уверены, что хотите отменить задачу?", 
											function(result) {
												if (result === BPMSoft.MessageBoxButtons.YES.returnCode) {
        											this.sandbox.publish("CancelTask", "EduTaskStatus", ["msg1"]);
													this.isTaskNotCanceled();
     											} else { }
											},
											["Yes", "No"]);	
			}
		}
	};
});
