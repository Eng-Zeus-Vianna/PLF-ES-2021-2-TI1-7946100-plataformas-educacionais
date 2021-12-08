
var db_aulas_inicial = {
    "data": [{
        "id": 1,
        "nome_aula": "Teste",
        "categoria": "teste",
    }]
}


var db = JSON.parse(localStorage.getItem('db_aula'));
if (!db) {
    db = db_aulas_inicial
};


function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertaula(aula) {

    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoaula = {
        "id": novoId,
        "nome_aula": aula.nome_aula,
        "conteudo": aula.conteudo,
    };


    db.data.push(novoaula);
    displayMessage("Aula inserida com sucesso");


    localStorage.setItem('db_aula', JSON.stringify(db));
}

function updateaula(id, aula) {

    let index = db.data.map(obj => obj.id).indexOf(id);


    db.data[index].nome_aula = aula.nome_aula,
        db.data[index].conteudo = aula.conteudo,

        displayMessage("Aula alterado com sucesso");

    localStorage.setItem('db_aula', JSON.stringify(db));
}

function deleteaula(id) {

    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Aula removida com sucesso");

    localStorage.setItem('db_aula', JSON.stringify(db));
}
