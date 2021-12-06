var count = 0;
let result = document.getElementById('result');
let review = document.getElementById('review');
let msgDanger = document.getElementById('msg-danger');


function resultMessage() {
	if (count != 0) {
		msgDanger.setAttribute('style', 'display: none');
		result.innerHTML =
			`
				<h4>Avaliação do Usuário: <label class='text-primary'>${count}</label></h4>
				<h4>Comentário</h4>
			 	<p> ${review.value}</p>
			 	<div class="justify-end">
			 		<button class="btn btn-success" onclick="confirmMessage()">Confirmar</button>
			 	</div>
			`;
	} else {
		msgDanger.setAttribute('style', 'display: block');
		msgDanger.innerHTML = "Faça sua avaliação!";
	}
}

function startRating(item) {
	count = item.id[0];
	sessionStorage.star = count;
	for (var i = 0; i < 5; i++) {
		if (i < count) {
			document.getElementById((i + 1)).style.color = "green";
		}
		else {
			document.getElementById((i + 1)).style.color = "black";
		}
	}
}

function confirmMessage() {
	alert("Avaliação salva com sucesso!")
}