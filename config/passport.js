var passport = require('passport'),
    gitHubStrategy = require('passport-github').Strategy,
    mongoose = require('mongoose');

module.exports = function(){

  var Usuario = mongoose.model("Usuario");

  passport.use(new gitHubStrategy({
    clientID : '3b7596fbdb9905a17fd1',
    clientSecret : '93ed95bb35e85d4cbd67259f95b4581fc955dd77',
    callbackURL: 'http://localhost:3000/auth/github/callback'
  }, function(acessToken, refreshToken,profile, done){

    Usuario.findOrCreate(
      {'login': profile.username},
      {'nome': profile.username},
      function(erro, usuario){
        if(erro){
          console.log(erro);
          return done(erro);
        }
        return done(null, usuario);
      }
    );

    passport.serializeUser(function(usuario, done){
        done(null, usuario._id);
    });

    passport.deserializeUser(function(id, done){
      Usuario.findById(id).exec()
      .then(function(usuario){
          done(null, usuario);
      });
    });

  }));
};
