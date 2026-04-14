const visualizador = (algo) => console.log(algo);

let minhaPromessa = new Promise((resolve, reject) => {
    let ok = true;


    if(ok){
        resolve("Promessa cumprida!");
    } else {
        reject("Promessa falhou!");
    }
})

minhaPromessa.then(
    (valor) => visualizador(valor),
    (valor) => visualizador(valor)
)