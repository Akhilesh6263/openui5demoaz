sap.ui.define(
    ["sap/ui/unified/CalendarAppointment"],
    function(CalendarAppointment) {
        return sap.ui.unified.CalendarAppointment.extend("com.webcell.koolbuddy.control.CustCalendarAppointment",{
            metadata: {
                properties: {
                   project: "string"
                }
            },
            renderer: function(oRm, oControl){
                sap.ui.unified.CalendarAppointmentRenderer.render(oRm, oControl); //use supercass renderer routine
            }
        });
    }
);