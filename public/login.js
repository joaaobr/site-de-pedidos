function login() {
const input1 = document.getElementById("email");
const input2 = document.getElementById("senha");
const email = input1.value
const senha = input2.value
const obj = { email, senha };

POSThttp("/autentication", obj)
.then((res) => {
    setDados('_dados_usuario', res)
    console.log(res);
    window.location.href = `/`;
    })
.catch((err) => {
    setDados('_dados_usuario', {logado: false})
    console.log(err);
    alert("Houve algum erro!");
    });
}