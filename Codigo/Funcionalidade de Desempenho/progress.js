var checked = 0;
function update() {

  var meuDesempenho = document.getElementById("meuDesempenho");

  var aulas = document.getElementById("aulas");

  var result = document.getElementById('concluidas');

  boxes = aulas.querySelectorAll("input[type='checkbox']:checked");
  checked = boxes.length

  meuDesempenho.style.width = ((checked / 5) * 100) + "%";

  result.innerText = 'Aulas concluídas' + checked + '/5';

  if (checked == 5) {
    alert("Parabéns, curso concluido");
  }

}

