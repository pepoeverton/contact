angular.module('contact').controller('ContactController', function($scope, $routeParams, $resource, Contato){

  //var Contato = $resource('/contatos/:id');

  if($routeParams.id){
    Contato.get({id: $routeParams.id},
      function(contato){
        $scope.contato = contato;
      },
      function(erro){
        $scope.mensagem = {
          texto: "Não foi possível obter o contato"
        };
        console.log(erro);
      }
    );
  }else{
    $scope.contato = {};
  }

  $scope.contato = new Contato();

  $scope.salva = function(){
    $scope.contato.$save()
      .then(function(){
        $scope.mensagem = {
          texto: "Salvo com suecsso!"
        },
        $scope.contato = new Contato();
      })
      .catch(function(erro){
          $scope.mensagem = {
            texto: "Não foi possível salvar"
          };
          console.log(erro);
      });
  };
});
