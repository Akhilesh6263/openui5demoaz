sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/GroupHeaderListItem"
], function (Controller, JSONModel, GroupHeaderListItem) {
	"use strict";

	return Controller.extend("com.webcell.koolbuddy.controller.studentDetails", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
			this.menuRightArea = this.getView().byId("boxMenuRight");
			this.menuRightArea.attachBrowserEvent("click", function () {
				this.toggleMenu();
			}.bind(this));

			var oModel = new JSONModel([{
				id: "1",
				class: "VII",
				Name: "Prachi Upadhyay",
				Phone: "8108997677",
				ProductPicUrl: "image/prachi.jpg"
			}, {
				id: "2",
				class: "III",
				Name: "Atharva Upadhyay",
				Phone: "8108997677",
				ProductPicUrl: "image/atharva.jpg"
			}, {
				id: "3",
				class: "III",
				Name: "Sanvi Upadhyay",
				Phone: "8108997677",
				ProductPicUrl: "image/pragya.jpg"
			}, {
				id: "4",
				class: "IX",
				Name: "Arjit Upadhyay",
				Phone: "8108997677",
				ProductPicUrl: "image/pragya.jpg"
			}]);
			this.getView().setModel(oModel, "studenModel");

		},
		onBack: function () {
			this._oRouter.navTo("students");
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
		onDisplayTypeChange: function (oEvent) {
			if(oEvent.getSource().getSelectedKey() === "Dashboard"){
				this.getView().byId("dashboardList").setVisible(true);
				this.getView().byId("idReports").setVisible(false);
			}else{
				this.getView().byId("dashboardList").setVisible(false);
				this.getView().byId("idReports").setVisible(true);
			}
		}

	});

});