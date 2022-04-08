function validarConta() {
    const dados = getDados('_dados_usuario')
    const nome = dados.nome
    const sobrenome =  dados.sobrenome
    const email =  dados.email
    
    // document.getElementById("id2").value = 
    // document.getElementById("id3").value =
    // document.getElementById("id4").value =
    const obj = { nome, sobrenome, email }
    
    fetch('/verificarConta', {
        method: "POST",
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(obj)
    })
    .then(res => {
        console.log('blablaseila', res)
      //window.location.reload();
    })
    .catch(err => {
        const dados = localStorage.setItem('_dados_usuario',JSON.stringify({ logado: false }))
        // window.location.href = '/login'
      //document.getElementById("descricao").value = '';
      alert("Falha ao inserir dados!")
    })
  };
  
  validarConta()