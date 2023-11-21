function validaFormulario(){

    const nome = document.getElementById("nome").value;
    const email= document.querySelector("#email").value;
    const senha = document.getElementById("senha").value;

    console.log(senha)

    //Validação de campos vazios
    if(nome === '' || email === '' || senha === ''){
        alert("Por favor,preencha os campos vazios!")
    }
    // Validação do campo de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if(emailRegex.text(email)){
        alert("Diogoite um e-mail válido")

    }

    //Verificar tamanho da senha
    if(senha.lenght > 8){
    alert("A senha  não pode ter mais de 8 caravteres ")
    return
    }

    alert("Cadastro foi realizado com  sucesso!")
    
}