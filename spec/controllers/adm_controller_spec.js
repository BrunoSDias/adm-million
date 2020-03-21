const Adm = require("../../app/models/adm");
const host = "http://localhost:3000";
const axios = require('axios').default;

describe("AdmController", () => {
  beforeEach(async() => {
    await Adm.deleteMany({}, async(err,removed) => {
      const adm = await new Adm({nome: "Bruno1", email:`bruno1@outlook.com`, senha: "123456"}).save(errors => {})
      const adm2 = await new Adm({nome: "Bruno2", email:`bruno2@outlook.com`, senha: "123456"}).save(errors => {})
    })
  })

  describe("GET /adm.json - Deve retornar se o controller de Adm (AdmController)", () => {
    it('respondeu com o status code de 200', async(done) => {
      const config = {
        headers:{'token': '1525354555'}
      }
      const response = await axios.get(`${host}/adm.json`, config)
      expect(response.status).toBe(200);
      done()
    })

    it('retornou algum dado', async(done) => {
      const config = {
        headers:{'token': '1525354555'}
      }
      const response = await axios.get(`${host}/adm.json`, config)
      const dados = response.data
      expect(dados[0].nome).toBe("Bruno1");
      expect(dados[1].nome).toBe("Bruno2");
      done()
    });
  });

  describe("POST /adm.json - Deve retornar se o controller de Adm (AdmController)", () => {
    it('cadastrou um administrador', async(done) => {
      const body = {
        nome: "Bruno",
        email: "brunoteste@email.com",
        senha: "123465"
      }
      const config = {
        headers:{'token': '1525354555'}
      }
      const response = await axios.post(`${host}/adm.json`, body, config)
      expect(response.status).toBe(201);
      done();
    });
  });

  describe("PUT /adm.json - Deve retornar se o controller de Adm (AdmController)", () => {
    it('atualizou um administrador', async(done) => {
      const adm = await Adm.create({nome: "BrunoNovo", email:`brunonovo@outlook.com`, senha: "123456"})
      body = {
        nome: "BrunoAtualizado",
        email: "brunoteste@email.com",
        senha: "123465"
      }
      const config = {
        headers:{'token': '1525354555'}
      }
      const response = await axios.put(`${host}/adm/${adm._id}.json`, body, config)
      expect(response.status).toBe(200);
      done();
    });
  });

  describe("DELETE /adm.json - Deve retornar se o controller de Adm (AdmController)", () => {
    it('removeu um administrador', async(done) => {
      const adm = await Adm.create({nome: "BrunoDelete", email:`brunodelete@outlook.com`, senha: "123456"})
      const config = {
        headers:{'token': '1525354555'}
      }
      const response = await axios.delete(`${host}/adm/${adm._id}.json`, config)
      expect(response.status).toBe(204);
      done();
    });
  });
});