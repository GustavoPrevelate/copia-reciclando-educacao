'use strict'

const routes = {
    '/controle': '../pages/controle.html',
    '/material': '../pages/material.html',
    '/contribuentes': '../pages/contribuentes.html',
    '/cadastro__materiais': '../pages/cadastro__materiais.html',
    '/cadastro__empresa': '../pages/cadastro__empresa.html',
    '/adicionar__materiais': '../pages/adicionar__materiais.html'
}

const route = async () => {
    window.event.preventDefault()
    window.history.pushState({}, "", window.event.target.href)

    const path = window.location.pathname
    const route = routes[path]
    const response = await fetch(route)
    const html = await response.text()

    document.getElementById('root').innerHTML = html
}

window.route = route