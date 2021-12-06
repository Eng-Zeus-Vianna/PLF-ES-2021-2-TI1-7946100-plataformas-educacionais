// Definição de dados de teste (mock/fake) incluídos no código
const usuario =
{
	"nome_usuario": "João",
	"cursos_cadastrados": [
		{
			"nome_curso": "Curso A",
			"aulas": [
				"Aula a1",
				"Aula a2",
				"Aula a3",
				"Aula a4"
			]
		},
		{
			"nome_curso": "Curso B",
			"aulas": [
				"Aula b1",
				"Aula b2",
				"Aula b3",
				"Aula b4",
				"Aula b5",
				"Aula b6"
			]
		},
		{
			"nome_curso": "Curso C",
			"aulas": [
				"Aula c1",
				"Aula c2",
				"Aula c3",
				"Aula c4",
				"Aula c5",
				"Aula c6",
				"Aula c7",
				"Aula c8"
			]
		}
	]
}

// Permitir a visualização dos dados de forma dinâmica a partir da estrutura definida anteriormente
window.onload = () => {
	document.querySelector("#nome_usuario").innerHTML = usuario.nome_usuario;

	let cursosCadastrados = document.querySelector("#cursos_cadastrados");
	let listaAulas = document.querySelector("#lista_aulas");

	usuario.cursos_cadastrados.forEach(function (curso, posicao) {
		cursosCadastrados.innerHTML += `
		<option class="opcao" value="${posicao}">${curso.nome_curso}</option>
		`
	})

	cursosCadastrados.onchange = () => {
		let ind = cursosCadastrados[cursosCadastrados.selectedIndex].value;
		listaAulas.innerHTML = "";
		usuario.cursos_cadastrados.forEach(function (objCursos, posicao) {
			if (posicao == ind) {
				for (let i = 0; i < objCursos.aulas.length; i++) {

					listaAulas.innerHTML += `
				<li><input type="checkbox"> ${objCursos.aulas[i]}</li>
				`
				}
			}
		})
	};
}

/* Plano de testes

Cenário  | Pré-condições  | Ação                  | Resultado Esperado                                    |
---------|----------------|-----------------------|------------------------------------------------------ |
Login Ok | Site funcional | Alternar para Curso A | Visualização de todas as aulas disponíveis do Curso A |
Login Ok | Site funcional | Alternar para Curso A | Visualização de todas as aulas disponíveis do Curso A |
Login Ok | Site funcional | Alternar para Curso A | Visualização de todas as aulas disponíveis do Curso A |

*/