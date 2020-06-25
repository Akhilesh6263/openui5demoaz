sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.webcell.koolbuddy.controller.userRegistration", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
		},
		onBack: function () {
			this._oRouter.navTo("Routelogin");
		}

	});

});