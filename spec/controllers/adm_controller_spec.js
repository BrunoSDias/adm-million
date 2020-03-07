const request = require('request-promise');
const host = "http://localhost:3000";

describe("Deve retornar se o controller de Adm (AdmController)", () => {
  it('respondeu com o status code de 200', (done) => {
    let options = {
      method: 'GET',
      uri: `${host}/adm.json`,
      resolveWithFullResponse: true
    };
    request(options)
      .then( (response) => {
          expect(response.statusCode).toBe(200);
      })
      .catch(function (err) {
          console.log("===============");
          console.log(err);
          console.log("===============");
      });
    done();
  });

  it('retornou algum dado', (done) => {
    let options = {
      method: 'GET',
      uri: `${host}/adm.json`,
      resolveWithFullResponse: true
    };
    request(options)
      .then( (response) => {
        let dados = JSON.parse(response.body);
        expect(dados).toEqual([
          {
            id: 1,
            nome: "Bruno",
            senha: "123456"
          },
          {
            id: 2,
            nome: "Bruno2",
            senha: "123456",
          }
        ]);
        expect(dados[0].id).toBe(1);
        expect(dados[1].id).toBe(2);
    })
    .catch(function (err) {
        console.log("===============");
        console.log(err);
        console.log("===============");
    });
    done();
  });
});