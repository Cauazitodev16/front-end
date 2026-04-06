let dataAtual = new Date();
let ano = dataAtual.getFullYear();
let mes = dataAtual.getMonth() + 1;
let dia = dataAtual.getDate();
let hora = dataAtual.getHours();
let minuto  = dataAtual.getMinutes();
let segundo = dataAtual.getSeconds();
let milissegundo = dataAtual.getMilliseconds();

console.log(`${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}:${milissegundo}`);   