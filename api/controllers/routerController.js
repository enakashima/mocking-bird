var fs = require('fs');
var path = require('path');

module.exports = (req, res, route) => {
    console.log(route)
    route.responseJson ? withBody(res, route) : withoutBody(res, route)
}

function withBody(res, route) {
    let filePath = path.join(__dirname, '..', 'config', route.responseJson)
    let file = fs.readFileSync(filePath, 'utf8');
    res.status(route.responseCode).send(JSON.parse(file))
}

function withoutBody(res, route) {
    res.sendStatus(route.responseCode)
}