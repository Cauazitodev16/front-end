const frutas = new Map();
frutas.set("maçã", 5);
frutas.set("banana", 7);
frutas.set("laranja", 10);

console.log("O preço do quilo da banana é : " + frutas.get("banana"));
console.log("O preço do quilo da maçã é : " + frutas.get("maçã"));
console.log("O preço do quilo da laranja é : " + frutas.get("laranja"));


const legumes = new Map(
    [
        ["batata", 6],
        ["cenoura", 4],
        ["abobrinha", 8]
    ]
)
console.log(`O preço do quilo da batata é : ${legumes.get("batata")}`);
console.log(`O preço do quilo da cenoura é : ${legumes.get("cenoura")}`);
console.log(`O preço do quilo da abobrinha é : ${legumes.get("abobrinha")}`);


frutas.set("manga", 12);