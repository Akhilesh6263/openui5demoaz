sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/GroupHeaderListItem"
], function (Controller, JSONModel, GroupHeaderListItem) {
	"use strict";

	return Controller.extend("com.webcell.koolbuddy.controller.students", {

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
			this.testAZApi();
		},
		testAZApi: function () {
			$.ajax({
				// url: "https://prod-30.southeastasia.logic.azure.com/workflows/1f4e0fec206e42ccaabb1f980c7cdd62/triggers/manual/paths/invoke/SalesLT.Product/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=OcU1CKmzo972QQgG72_pSvcoDaGtsJjxd1FIwhu1gTw",
				// url: "https://prod-30.southeastasia.logic.azure.com/workflows/1f4e0fec206e42ccaabb1f980c7cdd62/triggers/manual/paths/invoke/SalesLT.Product/?api-version=2016-10-01&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0",
				// url: "https://cors-anywhere.herokuapp.com/https://funcdemoodata.azurewebsites.net/demo/SalesLT.Address",
				url: "https://funcdemoodata.azurewebsites.net/demo/SalesLT.Address",
				contentType: "application/json",
				dataType: 'json',
				// data: {
				// 	sig: "OcU1CKmzo972QQgG72_pSvcoDaGtsJjxd1FIwhu1gTw"
				// },
				// beforeSend: function (xhr) {
				// 	xhr.setRequestHeader('sig', 'OcU1CKmzo972QQgG72_pSvcoDaGtsJjxd1FIwhu1gTw');
				// },
				success: function (result) {
					debugger;
				},
				error: function (oError) {
					debugger;
				}
			})
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
		onDisplayTypeChange: function (oEvent) {
			if (oEvent.getSource().getSelectedKey() === "list") {
				this.getView().byId("idList").setVisible(true);
				this.getView().byId("idGrid").setVisible(false);
			} else {
				this.getView().byId("idList").setVisible(false);
				this.getView().byId("idGrid").setVisible(true);
			}
		},
		getGroupHeader: function (oGroup) {
			return new GroupHeaderListItem({
				title: "Class : " + oGroup.key,
				upperCase: true
			});
		},
		onStudentSelect: function (oEvent) {
			// oEvent.getSource().getBindingContext("studenModel").getObject();
			this._oRouter.navTo("studentDetails");
		}

	});

});