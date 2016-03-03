angular.module('contact').factory('Contato', function($resource){
  return $resource('/contatos/:id');
});
