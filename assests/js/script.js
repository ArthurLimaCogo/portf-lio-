//tratamento de eventos
document.querySelector("#paginas").addEventListener("change",calcular);
document.querySelector("#tipo").addEventListener("change",calcular);
document.querySelector("#prototipo_sim").addEventListener("change",calcular);
document.querySelector("#prototipo_nao").addEventListener("change",calcular);

document.querySelector("#prazo").addEventListener("input", function(){
    const prazo = document.querySelector("#prazo").value;
    document.querySelector("lable[for=prazo]").innerText = "Prazo " + prazo;
    calcular();
});

function calcular(){
    // Var, Let ou const: criar variavel
    //Dom - Document Object Model
    const qtdeDePaginas = document.querySelector("#paginas").value;

    let valor = qtdeDePaginas * 1000;
    
    const tipo = document.querySelector("#tipo").value;
    if(tipo == 2) valor += 2000

    const prototipo = document.querySelector("#prototipo_sim").checked;
    if(prototipo) valor *= 1.1
    
    document.querySelector("#valor").innerText = "R$ " + valor.toFixed(2);
    
}


