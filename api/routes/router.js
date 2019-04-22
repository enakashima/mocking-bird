var routerController = require('../controllers/routerController')

module.exports = function(app) {
    
    let routes = require('../config/routes')
    routes.forEach(route => configureRoute(app, route))

}

function configureRoute(app, route) {
    let routeConfig = app.route(route.url)
    routeConfig[route.method]((req, res) => routerController(req, res, route))
}