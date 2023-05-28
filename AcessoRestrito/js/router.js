'use strict'



const routes = {
    '/'                :       '../pages/controle.html',
    '/material'        :       '../pages/material.html',
    '/contribuentes'        :       '../pages/contribuentes.html',
    '/cadastro_materiais'       :       '../pages/cadastro_materiais.html',
    '/cadastro_empresas'   :       '../pages/cadastro_empresas.html',
    '/adicionar_projeto'      :       '../pages/adicionar_projeto.html'
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