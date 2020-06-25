sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("com.webcell.koolbuddy.controller.attendance", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
			this.menuRightArea = this.getView().byId("boxMenuRight");
			this.menuRightArea.attachBrowserEvent("click", function () {
				this.toggleMenu();
			}.bind(this));
		},
		onBack: function () {
			this._oRouter.navTo("dashboard");
		},
		toggleMenu: function (oEvent) {
			$(".boxMenu").animate({
				width: "toggle"
			}, 250, function () {
				// $(".boxMenuRight").toggle();
			});
		},
		onMenuItemPress: function (oEvent) {
			var sMenu = oEvent.getSource().getContent()[0].getText();
			this.toggleMenu();
			if (sMenu === "Home") {
				this._oRouter.navTo("dashboard");
			} else if (sMenu === "Profile") {
				// this._oRouter.navTo("newuser");
			} else if (sMenu === "My Farm") {
				// this._oRouter.navTo("newuser");
			} else if (sMenu === "Logout") {
				this._oRouter.navTo("Routelogin");
			}
		},

	});

});