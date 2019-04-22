var express = require('express'), app = express(), port = process.env.PORT || 3000

require('./api/routes/router')(app)

app.listen(port);

console.log('mocking-bird started on: ' + port);