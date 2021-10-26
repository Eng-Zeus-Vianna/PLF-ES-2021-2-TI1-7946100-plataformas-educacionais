function leDados() {
    let strDados = localStorage.getItem('db');

    let objDados = {};

    if (strDados) {
        objDados = JSON.parse(strDados);
    } else {
        objDados = {
            usuario: [
                { perfilAluno: "Aluno", nome: "João", email: "joao@gmail.com", telefone: "3199556633", instituicao: "Colegio Cotemig Barroca", senha: "123456" },
            ]
        }
    }

    return objDados;
}


function salvaDados() {
    localStorage.setItem('db', JSON.stringify(dados));


}

function incluirUsuario() {
    let objDados = leDados();



    let strNome = document.getElementById('campoNome').value;
    let strEmail = document.getElementById('campoEmail').value;
    let strTelefone = document.getElementById('campoTelefone').value;
    let strInstituicao = document.getElementById('campoInstituicao').value;
    let strSenha = document.getElementById('campoSenha').value;

    let novoUsuario = {

        nome: strNome,
        email: strEmail,
        telefone: strTelefone,
        instituicao: strInstituicao,
        senha: strSenha
    };
    objDados.usuario.push(novoUsuario);

    // Salvar os dados no localStorage novamente
    salvaDados(objDados);

    // Atualiza os dados da tela
    imprimeDados();



}

function imprimeDados() {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados();

    for (i = 0; i < objDados.usuario.length; i++) {
        strHtml += `<p>${objDados.usuario[i].nome} - ${objDados.usuario[i].email} - ${objDados.usuario[i].telefone}</p> - ${objDados.usuario[i].instituicao}</p> - ${objDados.usuario[i].senha}</p>`
    }

    tela.innerHTML = strHtml;
}

document.getElementById('btnIncluirUsuario').addEventListener('click', incluirUsuario);