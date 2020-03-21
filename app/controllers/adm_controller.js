const Adm = require('../models/adm');
const TOKEN = "1525354555"

const AdmController = {
  index: function(request, response) {

    if(request.headers.token == TOKEN){
      Adm.find().then(dado => response.send(dado))
    }
    else {
      response.status(401).send({error: "Acesso negado a API, Token inválido"})
    }

  },
  create: function(request, response) {
    if(request.headers.token == TOKEN){
      const adm = new Adm({nome: request.body.nome, email: request.body.email, senha: request.body.senha});
      adm.save(errors => {
        if (errors) {
          response.status(401).send(errors);
          return
        }
        response.status(201).send({});
      });
    }
    else {
      response.status(401).send({error: "Acesso negado a API, Token inválido"})
    }
  },
  update: function(request, response) {
    if(request.headers.token == TOKEN){
      Adm.find({_id: request.params.adm_id}).then(dado => {
        if (dado.length > 0) {
          adm = dado[0]
          adm.nome = request.body.nome
          adm.email = request.body.email
          adm.senha = request.body.senha
          adm.save(errors => {
            if (errors) {
              response.status(401).send(errors)
            }
            response.status(200).send(adm)
          })
        }
      })
    }
    else {
      response.status(401).send({error: "Acesso negado a API, Token inválido"})
    }
  },
  destroy: function(request, response) {
    if(request.headers.token == TOKEN){
      Adm.deleteMany({_id: request.params.adm_id}, (errors,removed) => {
        if (errors) {
          response.status(401).send(errors)
        }
        response.status(204).send(removed)
      })
    }
    else {
      response.status(401).send({error: "Acesso negado a API, Token inválido"})
    }
  }
}

module.exports = AdmController;