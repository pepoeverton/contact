angular.module('contact').controller('ContactsController', function($scope, $resource){
  $scope.contatos = [];

  $scope.filtro = '';

  var Contato = $resource('/contatos/:id');

  function getContatos(){
    Contato.query(
        function(contatos){
          $scope.contatos = contatos;
        },
        function(erro){
          console.log("Não foi possível obter a lista de contatos");
          consoe.log(erro);
        }
    );
  }
  getContatos();
});
