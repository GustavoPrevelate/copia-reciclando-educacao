const form = document.getElementById("form-material");
export function handleSubmitInserirMaterial(event) {
    event.preventDefault();
    checkFormValidarInsercaoMaterial()
  }
  

function checkInputNomeContribuente(){
  const nomeContribuinte = document.getElementById("nome__contribuidor__material");
  const nomeContribuinteValue = nomeContribuinte.value;

  if(nomeContribuinteValue == ""){
    errorInput(nomeContribuinte, "Preencha o seu nome")
  }else{
    const formItem = nomeContribuinte.parentElement;
    formItem.className = "form-entrega-material"
    return true
  }

}


function checkInputQuantidadeMaterial(){
    const quantidadeMaterial = document.getElementById("quantidade__material__inserido");
    const quantidadeMaterialValue = quantidadeMaterial.value;
  
    if(quantidadeMaterialValue == ""){
      errorInput(quantidadeMaterial, "Preencha a quantidade de material")
    }else{
      const formItem = quantidadeMaterial.parentElement;
      formItem.className = "form-entrega-material"
      return true
    }
  
  }


function checkInputSelectTipoMaterial(){
  const selectTipoMaterial = document.getElementById("selecao__inserir__tipo__material");
  
  if(selectTipoMaterial.value == "" ){
  }else{
    return true
  }
}


function checkFormValidarInsercaoMaterial(){
  if(checkInputNomeContribuente() &&
  checkInputQuantidadeMaterial() &&
  checkInputSelectTipoMaterial()){
    alert('Inserção de material feita com sucesso!')
  }



}


function errorInput(input, message){
  const formItem = input.parentElement;
  const textMessage = formItem.querySelector("a")

  textMessage.innerText = message;

  formItem.className = "form-entrega-material error"

}

window.checkFormValidarInsercaoMaterial = checkFormValidarInsercaoMaterial