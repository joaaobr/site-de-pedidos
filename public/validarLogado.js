function valiadarAutenticacao() {
    const dados = getDados('_dados_usuario')
    if((!dados.nome) || (!dados.email) || (!dados.sobrenome) || (!dados.logado)) {
        setDados('_dados_usuario', JSON.stringify({logado: false}))
        window.location.href = '/login'
    }
}
valiadarAutenticacao()