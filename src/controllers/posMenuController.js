var Backbone = require("backbone"),
    Marionette = require("backbone.marionette"),
    POSMenu = require("../posmenu.js"),
    // Collections
    
    // Views
    NavbarView = require("../views/navbar"),
    HomeView = require("../views/home");

    // Utils
    

var POSMenuController = Marionette.Controller.extend({
    initialize: function() {
        
    },

    start: function() {
        this.showNavbar();
    },

    showNavbar: function() {
        POSMenu.navbarContainer.show(new NavbarView({

        }));
    },

    showHomePage: function() {
        POSMenu.mainContainer.show(new HomeView({

        }));
    }
});

module.exports = POSMenuController;
