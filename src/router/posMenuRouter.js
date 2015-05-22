var Marionette = require("backbone.marionette");

var POSMenuRouter = Marionette.AppRouter.extend({
    appRoutes: {
    	"": "showHomePage"
    }
});

module.exports = POSMenuRouter;
