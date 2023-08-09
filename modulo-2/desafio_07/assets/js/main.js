const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefa = document.querySelector(".tarefas");

function criaLi(){
    const li = document.createElement('li');
    cosn
}

function criaTarefa(textoInput) {
  console.log(textoInput);
}

btnTarefa.addEventListener("click", function () {
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});
