angular.module('contact', ['ngRoute', 'ngResource'])
  .config(function($routeProvider){

    $routeProvider.when('/contatos',{
        templateUrl: 'partials/contatos.html',
        controller: 'ContactsController'
    });
    $routeProvider.when('/contato/:id',{
        templateUrl: 'partials/contato.html',
        controller: 'ContactController'
    });
    $routeProvider.when('/contato',{
        templateUrl: 'partials/contato.html',
        controller: 'ContactController'
    });
    $routeProvider.otherwise({
        redirectTo: '/contatos'
    });
  });
