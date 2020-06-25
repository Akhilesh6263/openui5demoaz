sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/format/DateFormat",
	"sap/ui/model/json/JSONModel",
	"sap/ui/unified/library",
	"sap/m/MessageToast"
], function (Controller, DateFormat, JSONModel, unifiedLibrary, MessageToast) {
	"use strict";
	var CalendarDayType = unifiedLibrary.CalendarDayType;
	return Controller.extend("com.webcell.koolbuddy.controller.dashboard", {

		onInit: function () {
			this._oRouter = this.getOwnerComponent().getRouter();
			this.menuRightArea = this.getView().byId("boxMenuRight");
			this.menuRightArea.attachBrowserEvent("click", function () {
				this.toggleMenu();
			}.bind(this));
			this._setCalModel();
		},
		onBack: function () {
			this._oRouter.navTo("Routelogin");
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
		onDisplayTypeChange: function(oEvent){
			if(oEvent.getSource().getSelectedKey() === "Calender"){
				this.getView().byId("idmyClanedar").setVisible(true);
				this.getView().byId("iddashboardList").setVisible(false);
			}else{
				this.getView().byId("idmyClanedar").setVisible(false);
				this.getView().byId("iddashboardList").setVisible(true);
			}
		},
		_setCalModel: function () {
			var oModel = new JSONModel();
			oModel.setData({
				startDate: new Date("2018", "6", "9"),
				appointments: [{
					title: "Maths - Class 5th",
					type: CalendarDayType.Type05,
					startDate: new Date("2020", "5", "7", "9", "0"),
					endDate: new Date("2020", "5", "8", "10", "45")
				}, {
					title: "Discussion of the plan",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "8", "6", "0"),
					endDate: new Date("2018", "6", "8", "7", "9")
				}, {
					title: "Lunch",
					text: "canteen",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "8", "7", "0"),
					endDate: new Date("2018", "6", "8", "8", "0")
				}, {
					title: "New Product",
					text: "room 105",
					type: CalendarDayType.Type01,
					icon: "sap-icon://meeting-room",
					startDate: new Date("2018", "6", "8", "8", "0"),
					endDate: new Date("2018", "6", "8", "9", "0")
				}, {
					title: "Discussion with clients regarding our new purpose",
					text: "room 234 and Online meeting",
					type: CalendarDayType.Type08,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "8", "10", "0"),
					endDate: new Date("2018", "6", "8", "11", "30")
				}, {
					title: "Discussion of the plan",
					text: "Online meeting with partners and colleagues",
					type: CalendarDayType.Type01,
					icon: "sap-icon://home",
					tentative: true,
					startDate: new Date("2018", "6", "8", "11", "30"),
					endDate: new Date("2018", "6", "8", "13", "00")
				}, {
					title: "Discussion with clients",
					type: CalendarDayType.Type08,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "8", "12", "30"),
					endDate: new Date("2018", "6", "8", "13", "15")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "8", "13", "9"),
					endDate: new Date("2018", "6", "8", "13", "9")
				}, {
					title: "Meeting with the HR",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "8", "14", "0"),
					endDate: new Date("2018", "6", "8", "14", "15")
				}, {
					title: "Call with customer",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "8", "14", "15"),
					endDate: new Date("2018", "6", "8", "14", "30")
				}, {
					title: "Prepare documentation",
					text: "At my desk",
					icon: "sap-icon://meeting-room",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "8", "14", "10"),
					endDate: new Date("2018", "6", "8", "15", "30")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "9", "6", "30"),
					endDate: new Date("2018", "6", "9", "7", "0")
				}, {
					title: "Lunch",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "9", "7", "0"),
					endDate: new Date("2018", "6", "9", "8", "0")
				}, {
					title: "Team meeting",
					text: "online",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "8", "0"),
					endDate: new Date("2018", "6", "9", "9", "0")
				}, {
					title: "Discussion with clients for the new release dates",
					text: "Online meeting",
					type: CalendarDayType.Type08,
					startDate: new Date("2018", "6", "9", "9", "0"),
					endDate: new Date("2018", "6", "9", "10", "0")
				}, {
					title: "Team meeting",
					text: "room 5",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "11", "0"),
					endDate: new Date("2018", "6", "9", "14", "0")
				}, {
					title: "Daily standup meeting",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "9", "9", "0"),
					endDate: new Date("2018", "6", "9", "9", "15", "0")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "11", "9", "9"),
					endDate: new Date("2018", "6", "11", "9", "20")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "10", "6", "0"),
					endDate: new Date("2018", "6", "10", "7", "0")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "10", "15", "0"),
					endDate: new Date("2018", "6", "10", "15", "30")
				}, {
					title: "Meet John Doe",
					type: CalendarDayType.Type05,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "11", "7", "0"),
					endDate: new Date("2018", "6", "11", "7", "30")
				}, {
					title: "Team meeting",
					text: "online",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "11", "8", "0"),
					endDate: new Date("2018", "6", "11", "9", "30")
				}, {
					title: "Workshop",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "11", "8", "30"),
					endDate: new Date("2018", "6", "11", "12", "0")
				}, {
					title: "Team collaboration",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "12", "4", "0"),
					endDate: new Date("2018", "6", "12", "12", "30")
				}, {
					title: "Out of the office",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "12", "15", "0"),
					endDate: new Date("2018", "6", "12", "19", "30")
				}, {
					title: "Working out of the building",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "12", "20", "0"),
					endDate: new Date("2018", "6", "12", "21", "30")
				}, {
					title: "Vacation",
					type: CalendarDayType.Type09,
					text: "out of office",
					startDate: new Date("2018", "6", "11", "12", "0"),
					endDate: new Date("2018", "6", "13", "14", "0")
				}, {
					title: "Reminder",
					type: CalendarDayType.Type09,
					startDate: new Date("2018", "6", "12", "00", "00"),
					endDate: new Date("2018", "6", "13", "00", "00")
				}, {
					title: "Team collaboration",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "6", "00", "00"),
					endDate: new Date("2018", "6", "16", "00", "00")
				}, {
					title: "Workshop out of the country",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "14", "00", "00"),
					endDate: new Date("2018", "6", "20", "00", "00")
				}, {
					title: "Payment reminder",
					type: CalendarDayType.Type09,
					startDate: new Date("2018", "6", "7", "00", "00"),
					endDate: new Date("2018", "6", "8", "00", "00")
				}, {
					title: "Meeting with the manager",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "6", "9", "0"),
					endDate: new Date("2018", "6", "6", "10", "0")
				}, {
					title: "Daily standup meeting",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "7", "10", "0"),
					endDate: new Date("2018", "6", "7", "10", "30")
				}, {
					title: "Private meeting",
					type: CalendarDayType.Type03,
					startDate: new Date("2018", "6", "6", "11", "30"),
					endDate: new Date("2018", "6", "6", "12", "0")
				}, {
					title: "Lunch",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "6", "12", "0"),
					endDate: new Date("2018", "6", "6", "13", "0")
				}, {
					title: "Discussion of the plan",
					type: CalendarDayType.Type01,
					startDate: new Date("2018", "6", "16", "11", "0"),
					endDate: new Date("2018", "6", "16", "12", "0")
				}, {
					title: "Lunch",
					text: "canteen",
					type: CalendarDayType.Type05,
					startDate: new Date("2018", "6", "16", "12", "0"),
					endDate: new Date("2018", "6", "16", "13", "0")
				}, {
					title: "Team meeting",
					text: "room 200",
					type: CalendarDayType.Type01,
					icon: "sap-icon://meeting-room",
					startDate: new Date("2018", "6", "16", "16", "0"),
					endDate: new Date("2018", "6", "16", "17", "0")
				}, {
					title: "Discussion with clients",
					text: "Online meeting",
					type: CalendarDayType.Type08,
					icon: "sap-icon://home",
					startDate: new Date("2018", "6", "17", "15", "30"),
					endDate: new Date("2018", "6", "17", "16", "30")
				}],
				supportedAppointmentItems: [{
					text: "Team Meeting",
					type: CalendarDayType.Type01
				}, {
					text: "Personal",
					type: CalendarDayType.Type05
				}, {
					text: "Discussions",
					type: CalendarDayType.Type08
				}, {
					text: "Out of office",
					type: CalendarDayType.Type09
				}, {
					text: "Private meeting",
					type: CalendarDayType.Type03
				}]
			});

			this.getView().setModel(oModel);

			oModel = new JSONModel();
			oModel.setData({
				allDay: false
			});
			this.getView().setModel(oModel, "allDay");

			oModel = new JSONModel();
			oModel.setData({
				stickyMode: "NavBarAndColHeaders", //All
				enableAppointmentsDragAndDrop: true,
				enableAppointmentsResize: true,
				enableAppointmentsCreate: true
			});
			this.getView().setModel(oModel, "settings");
		},
		handleAppointmentSelect: function(oEvent){
			MessageToast.show(oEvent.getSource().getTitle());
		},
		onAttendance: function(){
			this._oRouter.navTo("attendance");
		},
		onMyStudents: function(){
			this._oRouter.navTo("students");
		}

	});

});