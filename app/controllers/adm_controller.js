const AdmController = {
  index: function(request, response) {
    response.send([{id:1, nome: 'Bruno'}]);
  }
}

module.exports = AdmController