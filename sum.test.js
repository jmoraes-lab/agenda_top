const sum = require("./sum")

test('Testa a funcao sum', () => { 
    const resultado = sum(5,5)
    expect(resultado).toBe(10)
 })
