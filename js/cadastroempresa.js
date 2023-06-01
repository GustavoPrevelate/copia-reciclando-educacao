const form = document.getElementById("form");
export function handleSubmit(event) {
    event.preventDefault();
    checkForm()
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    //form.addEventListener("submit", handleSubmit);
  });



function checkInputNomeEmpresa(){
  const nomeEmpresa = document.getElementById("nome__empresa");
  const nomeEmpresaValue = nomeEmpresa.value;

  if(nomeEmpresaValue == ""){
    errorInput(nomeEmpresa, "Preencha o nome da empresa.")
  }else{
    const formItem = nomeEmpresa.parentElement;
    formItem.className = "form-content"
    return true
  }

}


function checkInputCnpj(){
    const cnpj = document.getElementById("cnpj");
    const cnpjValue = cnpj.value;
  
    if(cnpjValue == ""){
      errorInput(cnpj, "Preencha o CNPJ.")
    }else{
      const formItem = cnpj.parentElement;
      formItem.className = "form-content"
      return true
    }
  
  }

function checkInputEmail(){
  const email = document.getElementById("email");
  const emailValue = email.value;

  if(emailValue == ""){
    errorInput(email, "Preencha o email.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form-content"
    return true
  }


}


function checkInputTelefone(){
  const telefone = document.getElementById("telefone");
  const telefoneValue = telefone.value;

  if(telefoneValue == ""){
    errorInput(telefone, "Preencha o número telefone.")
  }else{
    const formItem = telefone.parentElement;
    formItem.className = "form-content"
    return true
  }


}



function checkInputNumeroWhatsapp(){
    const numeroWhatsapp = document.getElementById("numero__whatsapp");
    const numeroWhatsappValue = numeroWhatsapp.value;
  
    if(numeroWhatsappValue == ""){
      errorInput(numeroWhatsapp, "Preencha o número de whatsapp.")
    }else{
      const formItem = numeroWhatsapp.parentElement;
      formItem.className = "form-content"
      return true
    }
  
}

  
function checkInputCep(){
    const cep = document.getElementById("cep");
    const cepValue = cep.value;
  
    if(cepValue == ""){
      errorInput(cep, "Preencha o CEP.")
    }else{
      const formItem = cep.parentElement;
      formItem.className = "form-content"
      return true
    }
  
}

function checkInputSelect(){
  const selectEstado = document.getElementById("select_estado");
  const selectMaterial = document.getElementById("select_material");
  const selectPeriodo = document.getElementById("select_periodo");
  if(selectEstado.value == "" || selectMaterial.value == "" || selectPeriodo.value == ""){
  }else{
    return true
  }
}


function checkForm(){
  if(checkInputNomeEmpresa() &&
  checkInputCnpj() &&
  checkInputEmail() &&
  checkInputTelefone()&&
  checkInputNumeroWhatsapp()&&
  checkInputCep() &&
  checkInputSelect()){
    alert('Cadastrado com sucesso!')
  }



}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-content error"

}

window.checkForm= checkForm