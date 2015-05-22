var _ = require("underscore"),
    Backbone = require("backbone"),
    POSMenu = require("./posmenu"),
    // Controllers
    POSMenuController = require("./controllers/posMenuController"),
    // Routers
    POSMenuRouter = require("./router/posMenuRouter");

POSMenu.addInitializer(function() {
    window.POSMenu = this;
});

// Controllers initializers
POSMenu.addInitializer(function() {
    var posMenuController = new POSMenuController();
    POSMenu.posMenuController = posMenuController;
    POSMenu.posMenuController.start();
});

// Router initializers
POSMenu.addInitializer(function() {
    var posMenuRouter = new POSMenuRouter({
        controller: POSMenu.posMenuController
    });

    POSMenu.posMenuRouter = posMenuRouter;
});

// Using on start ensure that history is started only after router and
// controllers are set
POSMenu.on("start", function() {
    if(Backbone.history) {
        Backbone.history.start();
    }
});

POSMenu.start();