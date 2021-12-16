var db = JSON.parse(localStorage.getItem('db_curso'))


function insertAula(aula) {
    let arrAulas = db.data[db.curso_selecionado].aulas

    let novoId = 1
    if (arrAulas.length != 0)
        novoId = arrAulas[arrAulas.length - 1].id + 1
    let novoaula = {
        "id": novoId,
        "nome_aula": aula.nome_aula,
        "link": aula.link,
    }

    db.data[db.curso_selecionado].aulas.push(novoaula)
    displayMessage("Aula inserida com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}

function updateaula(id, aula) {

    let index = db.data[db.curso_selecionado].aulas.map(obj => obj.id).indexOf(id)


    db.data[db.curso_selecionado].aulas[index].nome_aula = aula.nome_aula,
        db.data[db.curso_selecionado].aulas[index].link = aula.link,

        displayMessage("Aula alterado com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}

function deleteaula(id) {

    db.data[db.curso_selecionado].aulas = db.data[db.curso_selecionado].aulas.filter(function (element) { return element.id != id })

    displayMessage("Aula removida com sucesso")

    localStorage.setItem('db_curso', JSON.stringify(db))
}

function displayMessage(msg) {
    $('#msg').html('<div class="alert alert-warning">' + msg + '</div>')
}