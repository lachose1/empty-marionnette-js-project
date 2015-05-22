var _ = require("underscore"),
    Marionette = require("backbone.marionette"),
    POSMenu = require("../posmenu"),
    POSMenuUrl = require("../config/posMenuUrl"),
    ConfirmModalView = require("./confirmModal"),
    template = require("../../dist/templates").navbar;

var NavbarView = Marionette.LayoutView.extend({
    template: template,

    regions: {
        //"clockContainer": "#clock-container"
    },

    events: {
        
    },

    initialize: function(options) {
        
    },

    onRender: function() {
        //this.clockContainer.show(new ClockView());
    }
});

module.exports = NavbarView;
