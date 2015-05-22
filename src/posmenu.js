var //$ = require("jquery"),
    Backbone = require("backbone");
// Must be set before requiring Marionette
//Backbone.$ = window.$;
var Marionette = require("backbone.marionette");

var posmenu = new Marionette.Application({
    logEvents: function(log) {
        if(log) {
            if(!this.loggingEvents) {
                posmenu.vent.on("all", this.logEvent);
                this.loggingEvents = true;
            }
        } else {
            posmenu.vent.off("all", this.logEvent);
            this.loggingEvents = false;
        }
    },

    logEvent: function(event, payload) {
        console.log(event, payload);
    }
});

posmenu.addRegions({
    mainContainer: "#main-container",
    modalContainer: "#modal-container",
    navbarContainer: "#navbar"
});

module.exports = posmenu;