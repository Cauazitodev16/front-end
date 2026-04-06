let texto = "Olá, mundo!";
console.log(texto.length);
console.log(texto[0]);
console.log(texto[10]);

let nome = "cauã";

console.log(nome.split('  ').map(palavra => palavra.charAt(0).toUpperCase() + 
palavra.slice(1).toLowerCase()));

let frase = "JavaScript é uma linguagem de programação.";
console.log(frase.includes("linguagem"));
console.log("HTML é facil".replaceAll("HTML", "JavaScript"));