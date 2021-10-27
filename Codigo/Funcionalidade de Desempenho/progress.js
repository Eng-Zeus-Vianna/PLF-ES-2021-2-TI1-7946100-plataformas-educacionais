function update() {
  var checked = 0;
  var meuDesempenho = document.getElementById("meuDesempenho");

  var aulas = document.getElementById("aulas");


  boxes = aulas.querySelectorAll("input[type='checkbox']:checked");
  checked = boxes.length


  meuDesempenho.style.width = ((checked / 5) * 100) + "%";
  return true;
}

checks = document.querySelectorAll("input[type='checkbox']");
checks.forEach(function (box) {
  box.addEventListener("change", function (e) {
    update()
  });
});
console.log(box);