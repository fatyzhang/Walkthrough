sap.ui.define([], function(){
	"use strict";
	return {
		// function statusText gets the technical status from data modele as input parameter
		// and return a human-readable text that read from the resourceBundle file.
		statusText: function (sStatus) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch(sStatus) {
			case "A" :
				return resourceBundle.getText("invoiceStatusA");
			case "B" :
				return resourceBundle.getText("invoiceStatusB");
			case "C" :
				return resourceBundle.getText("invoiceStatusC");
			default:
				return sStatus;
			}
		}
	}
});