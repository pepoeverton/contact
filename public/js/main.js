angular.module('contact', ['ngRoute', 'ngResource'])
  .config(function($routeProvider, $httpProvider){

    $httpProvider.interceptors.push('interceptor');

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
    $routeProvider.when('/auth',{
        templateUrl: 'partials/auth.html'
    });
    $routeProvider.otherwise({
        redirectTo: '/contatos'
    });
  });
