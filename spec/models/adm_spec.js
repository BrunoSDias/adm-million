const Adm = require("../../app/models/adm");

describe("Deve retornar se o modelo de Adm", function() {
  it(' existe', () => {
    let adm = Adm;
    expect(adm !== undefined).toBe(true);
  });

  it('tem um id no', () => {
    let adm = Adm;
    expect(adm.id !== undefined).toBe(true);
  });

  it('tem um nome', () => {
    let adm = Adm;
    expect(adm.nome !== undefined).toBe(true);
  });

  it('tem o método todos', () => {
    let adm = Adm;
    expect(adm.todos() !== undefined).toBe(true);
  });
});