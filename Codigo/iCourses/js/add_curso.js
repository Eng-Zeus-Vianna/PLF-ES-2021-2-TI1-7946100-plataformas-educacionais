
var db_cursos_inicial = {
    "data": [{
        "id": 1,
        "nome_curso": "Leanne Graham",
        "autor": "Belo Horizonte",
        "categoria": "amigos",
    }]
}


var db = JSON.parse(localStorage.getItem('db_curso'));
if (!db) {
    db = db_cursos_inicial
};


function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>');
}

function insertCurso(curso) {

    let novoId = 1;
    if (db.data.length != 0)
        novoId = db.data[db.data.length - 1].id + 1;
    let novoCurso = {
        "id": novoId,
        "nome_curso": curso.nome_curso,
        "descricao": curso.descricao,
        "autor": curso.autor,

    };


    db.data.push(novoCurso);
    displayMessage("Curso inserido com sucesso");


    localStorage.setItem('db_curso', JSON.stringify(db));
}

function updateCurso(id, curso) {

    let index = db.data.map(obj => obj.id).indexOf(id);


    db.data[index].nome_curso = curso.nome_curso,
        db.data[index].descricao = curso.descricao,
        db.data[index].autor = curso.autor,


        displayMessage("Curso alterado com sucesso");

    localStorage.setItem('db_curso', JSON.stringify(db));
}

function deleteCurso(id) {

    db.data = db.data.filter(function (element) { return element.id != id });

    displayMessage("Curso removido com sucesso");

    localStorage.setItem('db_curso', JSON.stringify(db));
}
