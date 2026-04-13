const letras = new Set();
letras.add('a');
letras.add('b');
letras.add('c');
letras.add('a'); 

console.log(letras);

const letrasGregas = new Set(['alpha', 'beta', 'gamma']);

letrasGregas.add('alpha');

console.log(letrasGregas);

console.log(letrasGregas.has("épsilon"));
console.log(letrasGregas.has("beta"));
