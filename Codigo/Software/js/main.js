// Seleção do curso desejado
function escolheCurso(ind) {
	let dbCurso = JSON.parse(localStorage.getItem("db_curso"))
	dbCurso.curso_atual = ind
	localStorage.setItem("db_curso", JSON.stringify(dbCurso))
}