
const form = document.getElementById("form");
const nomeEmpresa = document.getElementById("nome__empresa");
const cnpj = document.getElementById("cnpj");
const email = document.getElementById("email");
const telefone = document.getElementById("telefone");
const numeroWhatsapp = document.getElementById("numero__whatsapp");
const cep = document.getElementById("cep");


export function handleSubmit(event) {

    

    event.preventDefault();
    checkForm();
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    form.addEventListener("submit", handleSubmit);
  });



function checkInputNomeEmpresa(){
  const nomeEmpresaValue = nomeEmpresa.value;

  if(nomeEmpresaValue == ""){
    errorInput(nomeEmpresa, "Preencha o nome da empresa.")
  }else{
    const formItem = nomeEmpresa.parentElement;
    formItem.className = "form-content"
  }

}


function checkInputCnpj(){
    const cnpjValue = cnpj.value;
  
    if(cnpjValue == ""){
      errorInput(cnpj, "Preencha o CNPJ.")
    }else{
      const formItem = cnpj.parentElement;
      formItem.className = "form-content"
    }
  
  }

function checkInputEmail(){
  const emailValue = email.value;

  if(emailValue == ""){
    errorInput(email, "Preencha o email.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
  }


}


function checkInputTelefone(){
  const telefoneValue = telefone.value;

  if(telefoneValue == ""){
    errorInput(telefone, "Preencha o número telefone.")
  }else{
    const formItem = telefone.parentElement;
    formItem.className = "form-content"
  }


}



function checkInputNumeroWhatsapp(){
    const numeroWhatsappValue = numeroWhatsapp.value;
  
    if(numeroWhatsappValue == ""){
      errorInput(numeroWhatsapp, "Preencha o número de whatsapp.")
    }else{
      const formItem = numeroWhatsapp.parentElement;
      formItem.className = "form-content"
    }
  
}

  
function checkInputCep(){
    const cepValue = cep.value;
  
    if(cepValue == ""){
      errorInput(cep, "Preencha o CEP.")
    }else{
      const formItem = cep.parentElement;
      formItem.className = "form-content"
    }
  
}


function checkForm(){
  checkInputNomeEmpresa();
  checkInputCnpj();
  checkInputEmail();
  checkInputTelefone();
  checkInputNumeroWhatsapp();
  checkInputCep();

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

