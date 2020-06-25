sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/DateFormat",
	"sap/ui/model/json/JSONModel",
	"sap/ui/unified/library",
	"sap/m/MessageToast"
], function (Controller, DateFormat, JSONModel, unifiedLibrary, MessageToast) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;

	return Controller.extend("com.webcell.koolbuddy.controller.principalHome", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();

		},
		onBack: function () {
			this._oRouter.navTo("Routelogin");
		},
		onLogin: function (oEvent) {
			var userName = this.getView().byId("idUserName").getValue();
			if (userName) {
				if (userName.toUpperCase() === "CT")
					this._oRouter.navTo("dashboard");
				else if (userName.toUpperCase() === "PR")
					this._oRouter.navTo("principalHome");
				else if (userName.toUpperCase() === "P")
					this._oRouter.navTo("dashboard");
			}
		},
		onRegister: function (oEvent) {
			this._oRouter.navTo("userRegistration");
		}
	});

});