var express = require('express'),
    load = require('express-load'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport'),
    helmet = require('helmet');

module.exports = function(){
  var app = express();

  app.set('port', 3000);
  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(cookieParser());
  app.use(session(
    {
      secret: 'pepo',
      resave: true,
      saveUninitialized: true
    }
  ));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(helmet());
  app.use(helmet.xframe());
  app.use(helmet.xssFilter());
  app.use(helmet.nosniff());
  app.disable('x-powered-by');

  load('models', {cwd: 'app'})
    .then('controllers')
    .then('routes/auth.js')
    .then('routes')
    .into(app);

  app.get('*', function(req, res){
    res.status(404).render('404');
  });

  return app;
};
