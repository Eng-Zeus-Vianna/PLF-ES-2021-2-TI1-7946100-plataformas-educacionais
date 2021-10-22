function lerDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};

    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { cursos: [ 
            {titulo: "Nome do Primeiro Curso", codigo: "11111", link: "link1.com", categoria: "Cursos Disso", preco: "R$1,00", descricao: "Explicação de como é um curso sobre coisas"}, 
            {titulo: "Nome do Segundo Curso", codigo: "22222", link: "link2.org", categoria: "Cursos Daquilo", preco: "R$2,00", descricao: "Explicação sobre o curso de outras coisas"}, 
            {titulo: "Nome do Terceiro Curso", codigo: "33333", link: "link3.com", categoria: "Cursos Disso", preco: "R$3,00", descricao: "Explicação sobre o curso de mais coisas"} 
        ]}
    }

    return objDados;

}

function salvarDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));

}

function incluirCurso () {
    alert ('WIP');

}
 
function imprimirDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = lerDados ();

    for (i=0; i< objDados.cursos.length; i++) {
        strHtml += `<p>${objDados.cursos[i].titulo} - ${objDados.cursos[i].categoria}
        <br>${objDados.cursos[i].codigo} | ${objDados.cursos[i].link}
        <br>${objDados.cursos[i].preco}
        <br>${objDados.cursos[i].descricao}</p>`
    }

    tela.innerHTML = strHtml;

}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimirDados);
document.getElementById ('btnIncluirCurso').addEventListener ('click', incluirCurso);