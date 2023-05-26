'use strict'



const routes = {
    '/'                :       '../pages/inicio.html',
    '/projetos'        :       '../pages/projetos.html',
    '/empresas'        :       '../pages/empresas.html',
    '/sobre_nos'       :       '../pages/sobre_nos.html',
    '/pontos_coleta'   :       '../pages/pontos_coleta.html',
    '/faca_parte'      :       '../pages/faca_parte.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html
       
    console.log(html)


}

window.route = route