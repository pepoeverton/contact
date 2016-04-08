var http = require('http');
var app = require('./config/express')();
require('./config/passport')();
require('./config/database.js')('mongodb://127.0.0.1/contact');

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express Server escutando na porta ' + app.get('port'));
});
