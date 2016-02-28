//ids
var ID_CONTATO = 3;

//lista de contatos
var contatos = [
  {_id: 1, nome: 'Contato Exemplo 1', email: 'cont1@empresa.com.br'},
  {_id: 2, nome: 'Contato Exemplo 2', email: 'cont2@empresa.com.br'},
  {_id: 3, nome: 'Contato Exemplo 3', email: 'cont3@empresa.com.br'}
];

module.exports = function(){
  var controller = {};
  controller.listContatos = function(req, res){
        res.json(contatos);
  };
  controller.getContato = function(req, res){
    var id = req.params.id;
    var contato = contatos.filter(function(contato){
      return contato._id == id;
    })[0];

    contato ? res.json(contato) : res.status('contato não encontrado');

  };
  controller.removeContato = function(req, res){
    var id = req.params.id;
    contatos = contatos.filter(function(contato){
        return contato._id != id;
    });
    res.status(204).end();
  };
  controller.salvaContato = function(req, res){
    var contato = req.body;

    contato = contato._id ? atualiza(contato) : adiciona(contato);

    res.json(contato);
  };
  function adiciona(contatoNovo){
    contatoNovo._id = ++ID_CONTATO;

    contatos.push(contatoNovo);
    console.log(contatoNovo);
    return contatoNovo;
  }
  function atualiza(contatoAlterar){

    contatos = contatos.map(function(contato){
      if(contato._id == contatoAlterar._id){
        contato = contatoAlterar;
      }
      return contato;
    });
    return contatoAlterar;
  }

  return controller;
}
