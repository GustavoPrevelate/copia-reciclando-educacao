const form = document.getElementById("form__login");
export function handleSubmitLogin(event) {
    event.preventDefault();
    checkFormLogin()
  }
  
function checkInputEmailLogin(){
  const emailLogin = document.getElementById("email__login");
  const emailLoginValue = emailLogin.value;

  if(emailLoginValue == ""){
    errorInputLogin(emailLogin, "Preencha o E-mail")
  }else{
    const formItem = emailLogin.parentElement;
    formItem.className = "form-content-login"
    return true
  }

}


function checkInputSenhaLogin(){
    const senhaLogin = document.getElementById("senha__login");
    const senhaLoginValue = senhaLogin.value;
  
    if(senhaLoginValue == ""){
      errorInputLogin(senhaLogin, "Preencha a senha corretamente.")
    }else{
      const formItem = senhaLogin.parentElement;
      formItem.className = "form-content-login"
      return true
    }
  
}


function checkFormLogin(){
  if(checkInputEmailLogin() &&
  checkInputSenhaLogin()){
    alert('Cadastrado com sucesso!')
  }



}


function errorInputLogin(input, message){
  const formItem = input.parentElement;
  const textMessageLogin = formItem.querySelector("a")

  textMessageLogin.innerText = message;

  formItem.className = "form-content-login error"

}

window.checkFormLogin = checkFormLogin