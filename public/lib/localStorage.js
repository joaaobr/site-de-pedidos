function getDados(item) {
    return JSON.parse(localStorage.getItem(item))
}

function setDados(item, dados) {
    return localStorage.setItem(item, dados)
}

