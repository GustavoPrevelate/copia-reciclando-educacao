'use strict'

const segundoRoutes = {
    '/home'                         :       './AcessoRestrito/segundoPages/segundoIndex.html',
    '/controle'                 :       './AcessoRestrito/segundoPages/controle.html',
    '/material'                 :       './AcessoRestrito/segundoPages/material.html',
    '/contribuentes'            :       './AcessoRestrito/segundoPages/contribuentes.html',
    '/cadastro__materiais'      :       './AcessoRestrito/segundoPages/cadastro__materiais.html',
    '/cadastro__empresa'        :       './AcessoRestrito/segundoPages/cadastro__empresa.html',
    '/adicionar__materiais'     :       './AcessoRestrito/segundoPages/adicionar__materiais.html'
}

const segundoRoute = async () => {
    
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    console.log(path);
    
    const segundoRoute = segundoRoutes[path]
    const response = await fetch(segundoRoute)
    const html = await response.text()

    document.getElementById('root').innerHTML = html



    // document.addEventListener("DOMContentLoaded", function() {
    //     // Resto do seu código
      
    //     // Chamar a função initializeCarousel quando apropriado
    //     if (path == '/projetos') {
    //       initializeCarousel();
    //     }else if(path == '/faca_parte'){
    //         handleSubmit();
    //     }
    // });
    
    console.log(html)
}

window.segundoRoute = segundoRoute