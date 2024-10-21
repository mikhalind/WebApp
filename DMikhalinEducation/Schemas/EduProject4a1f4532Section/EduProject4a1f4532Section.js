define("EduProject4a1f4532Section", [], function() {
	return {
		entitySchemaName: "EduProject",
		
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
			"SendProjectStatus": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.SUBSCRIBE
			},
			
			// Сообщение-запрос из секции на отмену проекта
			"CancelProject": {
				mode: BPMSoft.MessageMode.PTP,
				direction: BPMSoft.MessageDirectionType.PUBLISH
			}
		},
		
		methods: {
			// Переопределение базового метода, вызывающегося при инициализации схемы страницы
			init: function() {
				// Вызов родительской реализации метода
				this.callParent(arguments);
				// Подписка на получение статуса проекта
				this.sandbox.subscribe("SendProjectStatus", this.processMessage, this, ["msg1"]);
			},
			
			// Обработка полученного сообщения со статусом проекта
			processMessage: function(args) {
				this.isProjectNotCanceled(args.value);
			},
			
			// Метод изменения атрибута в зависимости от полученного сообщения
			isProjectNotCanceled: function(arg) {
				if (arg == "ce80ba52-2b99-45ba-b027-5afabd5655bd" || // если отменен
				    arg == "b5c9c5a5-889e-4629-8a77-258942a4b3c0") // если завершен
					this.set("StatusAttr", false);
				else
					this.set("StatusAttr", true);
            },	
			
			// Обработчик события нажатия на кнопку
			onCancelEventClick: function() {
				this.showConfirmationDialog("Вы уверены, что хотите отменить проект?", 
											function(result) {
												if (result === BPMSoft.MessageBoxButtons.YES.returnCode) {
        											this.sandbox.publish("CancelProject", "EduProjectStatus", ["msg1"]);
													this.isProjectNotCanceled();
													// message
     											} else { }
											},
											["Yes", "No"]);	
			}
		},
		
		details: { },
		
		diff: [{
                    "operation": "insert",
                    "parentName": "CombinedModeActionButtonsCardContainer",
                    "propertyName": "items",
                    "name": "CancelProjectButton",
                    "values": {
                          "itemType": BPMSoft.ViewItemType.BUTTON,
                          "caption": "Отменить проект (раздел)",
                          "click": { bindTo: "onCancelEventClick" },
                          "enabled": { bindTo: "StatusAttr" },
                          "style": BPMSoft.controls.ButtonEnums.style.DEFAULT
                    }
              }]
	};
});
