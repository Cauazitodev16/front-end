function pagina(){
    const input = document.createElement("input");

    input.type = "text";
    input.placeholder = "Digite uma tarefa";
    input.id = "tarefaInput";

    const botao = document.createElement("button");

    botao.id = "botaoadicionar";
    botao.textContent = "Adicionar";

    const lista = document.createElement("ul");
    lista.id = "listadetarefas";

    const div = document.querySelector(".container");

    const titulo = document.createElement("h2");
    titulo.textContent = "Lista de Tarefas";

    div.appendChild(titulo); 
    div.appendChild(input);
    div.appendChild(botao);
    div.appendChild(lista);


    botao.addEventListener("click", ()=>{
        const novaTarefa = document.createElement("li");
        const texto = input.value.trim();

        if(texto === ""){
            alert("Digite alguma coisa!");
            return;
        }

        novaTarefa.textContent = texto;
        novaTarefa.classList.add('destaque');
        novaTarefa.setAttribute("data-tarefa", texto.toLowerCase());
        novaTarefa.style.color = "#333";

        lista.appendChild(novaTarefa);
        
        novaTarefa.addEventListener("click", () => {
            const tarefa = novaTarefa.getAttribute("data-tarefa");
            console.log("Removendo:", tarefa);
            novaTarefa.classList.remove("destaque");
            novaTarefa.classList.add("removido");
            novaTarefa.innerHTML += " (removida)"
            setTimeout(() =>{lista.removeChild(novaTarefa);}, 1000);

            input.value = "";

        })

    })
}