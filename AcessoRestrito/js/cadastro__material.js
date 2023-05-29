
const form = document.getElementById("form");
const nomeDoador = document.getElementById("nome__doador");
const quantidade = document.getElementById("quantidade");



export function handleSubmit(event) {

    

    event.preventDefault();
    checkForm();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", handleSubmit);
  });



function checkInputNomeDoador(){
  const nomeDoadorValue = nomeDoador.value;

  if(nomeDoadorValue == ""){
    errorInput(nomeDoador, "Preencha o nome do Doador.")
  }else{
    const formItem = nomeDoador.parentElement;
    formItem.className = "form-content"
  }

}


function checkInputQuantidade(){
    const quantidadeValue = quantidade.value;
  
    if(quantidadeValue == ""){
      errorInput(quantidade, "Preencha o quantidade.")
    }else{
      const formItem = quantidade.parentElement;
      formItem.className = "form-content"
    }
  
  }



function checkForm(){
  checkInputNomeDoador();
  checkInputQuantidade();

  const formItems = form.querySelectorAll(".form-content")

  const isValid = [...formItems].every( (item) => {
    return item.className === "form-content"
  });

  if(isValid){
    alert("CADASTRADO COM SUCESSO!")
  }

}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}
