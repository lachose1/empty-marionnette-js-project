var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    POSMenu = require("../posmenu"),
    ConfirmModalView = require("./confirmModal"),
    template = require("../../dist/templates").home;

var HomeView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        //content: "main-container"
    },

    ui: {
        massMailBtn: "#btn-massmail"
    },

    events: {
        "click @ui.massMailBtn": "handleMassMailClick"
    },

    handleMassMailClick: function() {
        var options = {
            message: "Acceptez-vous?",
            confirmLabel: "Oui",
            confirmCallback: _.bind(this.actionMassMailClick, this)
        };

        POSMenu.modalContainer.show(new ConfirmModalView(options));
    },

    actionMassMailClick: function() {
        alert("ok");
    }
});

module.exports = HomeView;
