const Adm = require("../../app/models/adm");
Adm.deleteMany({},(err,removed) => {})

describe("Deve retornar se o modelo de Adm", function() {
  it('existe', () => {
    Adm.find().then(dado => {
      expect(dado !== undefined && dado !== null).toBe(true);
    });
  });

  it('foi criado', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: nome, email:`${nome} teste@outlook.com`, senha: "123456"});
    adm.save(errors => {
      expect(errors == undefined || errors == null).toBe(true);
    });
  });

  it('tem o atributo email preenchido', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: nome, email:null, senha: "123456"});
    adm.save(errors => {
      expect(errors == undefined || errors == null).toBe(false);
    });
  });

  it('já existe', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: nome, email:`${nome} teste@outlook.com`, senha: "123456"});
    adm.save(errors => {
      const adm2 = new Adm({nome: nome, email:`${nome} teste@outlook.com`, senha: "123456"});
      adm2.save(errors => {
        expect(errors == undefined || errors == null).toBe(false);
      });
    });
  });

  it('tem o atributo nome preenchido', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: null, email:`${nome} teste@outlook.com`, senha: "123456"});
    adm.save(errors => {
      expect(errors == undefined || errors == null).toBe(false);
    });
  });

  it('tem o atributo senha preenchido', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: nome, email:`${nome} teste@outlook.com`, senha: null});
    adm.save(errors => {
      expect(errors == undefined || errors == null).toBe(false);
    });
  });

  it('alterou um registro', () => {
    let nome = `teste ${new Date().getTime()}`;
    const adm = new Adm({nome: nome, email:`${nome} teste@outlook.com`, senha: "123456"});
    adm.save(errors => {
      let novo_nome = `Bruno ${new Date().getTime()}`
      adm.nome = novo_nome
      adm.save(errors => {
        Adm.find({nome: novo_nome}).then(dados => {
          expect(dados !== undefined && dados !== null && dados.length > 0).toBe(true);
        })        
      });
    });
  });
});