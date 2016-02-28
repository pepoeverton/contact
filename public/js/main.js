angular.module('contact', ['ngRoute', 'ngResource'])
  .config(function($routeProvider){

    $routeProvider.when('/contatos',{
        templateUrl: 'partials/contatos.html',
        controller: 'ContactsController'
    });
    $routeProvider.when('/contato/:contactId',{
        templateUrl: 'partials/contato.html',
        controller: 'ContactController'
    });
    $routeProvider.otherwise({
        redirectTo: '/contatos'
    });
  });
