const expect = require("chai").expect;
const pruebanpm = require("..").default;

describe("#pruebanpm", function(){
    it("Si la palabra termina en 'ar' se le quitan esos dos caracteres",() => {
        const translation = pruebanpm("Programar");
        expect(translation).to.equal("Program");
    })
    it("si la palara inicia con 'z' se le añade 'pe' al final.",function(){
        const translation = pruebanpm("Zorro");
        expect(translation).to.equal("Zorrope");
    })
    it("si la palabra traducida tiene mas de 10 letras se tiene que partir por la mitad y unir con un guion en medio",function(){
        const translation = pruebanpm("abecedario");
        expect(translation).to.equal("abece-dario");
    })
    it("Si la palabra original es un palindromo las reglas anteriores ya no cuentan y e devuelve la misma palabra intercalando entre mayusculas y minusculas",function(){
        const translation = pruebanpm("sometemos");
        expect(translation).to.equal("SoMeTeMoS");

    })
    
})