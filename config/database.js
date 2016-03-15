var mongoose = require('mongoose');

module.exports = function(uri) {
  mongoose.connect(uri);

  mongoose.set('debug',true);

  mongoose.connection.on('connected', function(){
    console.log('MongoDB, Conectado em ' + uri);
  });
  mongoose.connection.on('disconnected', function(){
    console.log('MongoDB, Disonectado em ' + uri);
  });
  mongoose.connection.on('error', function(){
    console.log('MongoDB, Erro na conexão em ' + uri);
  });

  process.on('SIGINT', function(){
    mongoose.connection.close(function(){
      console.log('Término da aplicação!');
      process.exit(0);
    });
  });
}
