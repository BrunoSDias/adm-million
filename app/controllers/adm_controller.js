const Adm = require('../models/adm');

const AdmController = {
  index: function(request, response) {
    const adm = new Adm({nome: "Bruno", email:"brunosdias5@outlook.com", senha: "123456"});
    // adm.save(errors => {
    //   if (errors) {
    //     response.send(errors);
    //     return;
    //   }

      Adm.find().then(dado => response.send(dado))
    // });
  }
}

module.exports = AdmController;