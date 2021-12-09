//	Define o curso que será carrregado em curso.html
function carregaCurso(ind) {
	db.curso_atual = ind
	localStorage.setItem("db_curso", JSON.stringify(db))
}

// Escolhe o curso que terá aulas adicionadas/removidas
function selecionarCurso(ind) {

	db.curso_selecionado = ind
	localStorage.setItem("db_curso", JSON.stringify(db))

	let tabelaAulas = document.getElementById("table-aulas")
	let aulas = db.data[db.curso_selecionado].aulas

	tabelaAulas.innerHTML = ""

	aulas.forEach(aula => {
		tabelaAulas.innerHTML += `
		<tr>
		<td scope="row">${aula.id}</td>
		<td>${aula.nome_aula}</td>
		<td>${aula.link}</td>
	</tr>
		`
	})

}