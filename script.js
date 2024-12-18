usuarios = []

function cadastrar() {

    document.getElementById('nomecoincide').style.display = 'none'
    document.getElementById('senhacoincidecad').style.display = 'none'
    document.getElementById('senhacoincidecad2').style.display = 'none'
    document.getElementById('coincidecd').style.display = 'none'

    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')
    let camponome = document.getElementById('inputnome')

    let senha = camposenha.value
    let repitasenha = camporepitasenha.value
    let nome = camponome.value

    let posnome = usuarios.indexOf(nome)

    let user = { nome, senha }

    if (nome == null || nome == "") {
        document.getElementById('nomecoincide').style.display = 'inline'
    }
    if (senha == null || senha == "") {
        document.getElementById('senhacoincidecad').style.display = 'inline'
    }
    if (repitasenha == null || repitasenha == "") {
        document.getElementById('senhacoincidecad2').style.display = 'inline'
    }
    else if (senha != null && senha != "" && nome != null && nome != "") {
        if (posnome == -1) {

            if (repitasenha == senha) {

                camporepitasenha.value = null
                camposenha.value = null
                camponome.value = null
                usuarios.push(user)
                alert("Usuário Cadastrado com Sucesso!")
            } else {
                document.getElementById('coincidecd').style.display = 'inline'
            }
        }
    }
}

function excluir() {

    document.getElementById('senhacoincideex2').style.display = 'none'
    document.getElementById('senhacoincideex').style.display = 'none'
    document.getElementById('nomecoincideex').style.display = 'none'
    document.getElementById('coincideex').style.display = 'none'

    let camponome = document.getElementById('inputNomeExcluir')
    let camposenha = document.getElementById('inputSenhaExcluir')
    let camporepitasenha = document.getElementById('inputRepitaSenhaExcluir')

    let nome = camponome.value
    let senha = camposenha.value
    let repitasenha = camporepitasenha.value

    if(nome == "" || nome == null){

        document.getElementById('nomecoincideex').style.display = 'inline'

    }
    if(senha == "" || senha == null){

        document.getElementById('senhacoincideex').style.display = 'inline'

    }
    if(repitasenha == "" || repitasenha == null){

        document.getElementById('senhacoincideex2').style.display = 'inline'

    } else if (nome != "" || nome != null || senha != "" || senha != null || repitasenha != "" || repitasenha != null) {

        if (repitasenha == senha) {

            for (let p = 0; p < usuarios.length; p++) {
                if (usuarios[p].nome == nome && usuarios[p].senha == senha) {
                    usuarios.splice(p, 1);
                    camponome.value = null
                    camporepitasenha.value = null
                    camposenha.value = null
                    alert("Usuário Excluído com Sucesso.")
                    break;
                } else{
                    alert("Usuário ou Senha não Encontrados.")
                    break;
                }
            }

        } else {
            document.getElementById('coincideex').style.display = 'inline'
        }
    } 
}


function editar() {

    document.getElementById('nomecoincideed').style.display = 'none'
    document.getElementById('senhacoincide').style.display = 'none'
    document.getElementById('editNome').style.display = 'none'
    document.getElementById('editSenha').style.display = 'none'

    let camponome = document.getElementById('inputEditarNome')
    let camposenha = document.getElementById('inputEditarSenha')
    let campoNovoNome = document.getElementById('inputEditarNovoNome')
    let campoNovaSenha = document.getElementById('inputEditarNovaSenha')


    let nome = camponome.value
    let senha = camposenha.value
    let novoNome = campoNovoNome.value
    let novaSenha = campoNovaSenha.value

    if(nome == "" || nome == null){
        document.getElementById('nomecoincideed').style.display = 'inline'
    }
    if(senha == "" || senha == null){
        document.getElementById('senhacoincide').style.display = 'inline'
    }
    if(novoNome == "" || novoNome == null){
        document.getElementById('editNome').style.display = 'inline'
    }
    if(novaSenha == "" || novaSenha == null){
        document.getElementById('editSenha').style.display = 'inline'
    } else if (nome != "" || nome != null && senha != "" || senha != null && novoNome != "" || novoNome != null && novaSenha != "" || novaSenha != null) {

        for (let p = 0; p < usuarios.length; p++) {

            if (usuarios[p].nome == nome && usuarios[p].senha == senha) {

                camponome.value = null
                camposenha.value = null
                campoNovaSenha.value = null
                campoNovoNome.value = null
                usuarios[p].nome = novoNome
                usuarios[p].senha = novaSenha
                alert("Usúario e Senhas Atualizados com Sucesso!")
                break

            } else{

                alert("Usuário ou Senha não Encontrados.")

            }
        }
    }
}

function listar() {

    let lista = document.getElementById("lista");
    let paragrafo = "";
    for (let user of usuarios) {
        paragrafo +=
            "Nome:  " + user.nome + "<br>" +
            "Senha: " + user.senha + "<br>-------<br>";
    }
    lista.innerHTML = paragrafo;
}


function paginaeditar() {

    esconder()
    document.getElementById('tela3').style.display = 'flex'

}

function paginacadastrar() {

    esconder()
    document.getElementById("tela1").style.display = 'flex'

}

function paginalistar() {

    esconder()
    document.getElementById("tela2").style.display = 'flex'
    listar()

}


function paginaexcluir() {

    esconder()
    document.getElementById('tela4').style.display = 'flex'

}

function esconder() {

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'

}

