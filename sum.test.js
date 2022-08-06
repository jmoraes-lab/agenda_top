const sum = require("./sum")

test('Testa a funcao sum', () => { 
    const resultado = sum(11111,6)
    expect(resultado).toBe(10)
 })
