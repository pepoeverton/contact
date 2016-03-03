angular.module('contact').controller('ContactsController', function($scope, $resource, Contato){
  $scope.contatos = [];
  $scope.mensagem = {texto: ''};
  $scope.filtro = '';

  //var Contato = $resource('/contatos/:id');

  function getContatos(){
    Contato.query(
        function(contatos){
          $scope.contatos = contatos;
          $scope.mensagem = {};
        },
        function(erro){
          $scope.mensagem = {
            texto: "Não foi possível obter a lista de contatos"
          };
          consoe.log(erro);
        }
    );
  }
  getContatos();

  $scope.remove = function(contato){
    Contato.delete({id: contato._id},
      getContatos,
      function(erro){
        $scope.mensagem = {
          texto: "Não foi possível remover o contato"
        };
        console.log(erro);
      }
    );
  };

});
