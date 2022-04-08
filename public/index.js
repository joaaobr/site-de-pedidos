function addUser() {
    const input1 = document.getElementById("email");
    const input2 = document.getElementById("senha");
    const email = input1.value
    const senha = input2.value
    alert(email, senha)
    const obj = { email, senha };

    POSThttp("/add", obj)
    .then((res) => {
    console.log(res);
    const result = JSON.parse(res)
    alert(result.id)
    window.location.href = `/cadastro/segunda-etapa/${result.id}`;
    })
    .catch((err) => {
    console.log(err);
    alert("Houve algum erro!");
    });
}




function UserAddName() {
    const input1 = document.getElementById("nome");
    const input2 = document.getElementById("sobrenome");
    const input3 = document.getElementById('id')
    const pedidos = 'Nenhum pedido!'
    const nome = input1.value
    const sobrenome = input2.value
    const id = input3.value
    console.log(nome ,sobrenome, id)
    alert(nome ,sobrenome, id)

    const obj = { nome, sobrenome, pedidos, id };
    alert(obj)
    POSThttp('/update', obj)
    .then((res) => {
    console.log(res);
    window.location.href = "/";
    })
    .catch((err) => {
    console.log(err);
    alert("Houve algum erro!");
    });
}
