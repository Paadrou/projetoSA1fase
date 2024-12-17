usuarios = []

function cadastrar() {

    document.getElementById('nomecoincide').style.display = 'none'
    document.getElementById('senhacoincidecad').style.display = 'none'

    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')
    let camponome = document.getElementById('inputnome')

    let senha = camposenha.value
    let repitasenha = camporepitasenha.value
    let nome = camponome.value

    let posnome = usuarios.indexOf(nome)

    let user = { nome, senha }

    if (nome != null) {

        if (posnome == -1) {

            if (repitasenha == senha) {

                camporepitasenha.value = null
                camposenha.value = null
                camponome.value = null

                usuarios.push(user)

            }
        }
    }
}

function excluir() {

    document.getElementById('senhacoincideex2').style.display = 'none'
    document.getElementById('senhacoincideex').style.display = 'none'

    let camponome = document.getElementById('inputNomeExcluir')
    let camposenha = document.getElementById('inputSenhaExcluir')
    let camporepitasenha = document.getElementById('inputRepitaSenhaExcluir')

    let nome = camponome.value
    let senha = camposenha.value
    let repitasenha = camporepitasenha.value


    if (nome != "" && senha != "") {

        if (repitasenha == senha) {

            camponome.value = ''
            camporepitasenha.value = ''
            camposenha.value = ''

            for (let p = 0; p < usuarios.length; p++) {
                if (usuarios[p].nome == nome && usuarios[p].senha == senha) {
                    usuarios.splice(p, 1)
                    break;
                }
            }

        } else {
            document.getElementById('senhacoincideex').style.display = 'inline'
        }
    } else {
        document.getElementById('senhacoincideex2').style.display = 'inline'
    }
}


function editar() {

    document.getElementById('nomecoincide').style.display = 'none'
    document.getElementById('senhacoincide').style.display = 'none'

    let camponome = document.getElementById('inputEditarNome')
    let camposenha = document.getElementById('inputEditarSenha')
    let campoNovoNome = document.getElementById('inputEditarNovoNome')
    let campoNovaSenha = document.getElementById('inputEditarNovaSenha')


    let nome = camponome.value
    let senha = camposenha.value
    let novoNome = campoNovoNome.value
    let novaSenha = campoNovaSenha.value

    let user2 = { novoNome, novaSenha }

    if (nome != "" && senha != "" && novoNome != '' && novaSenha != '') {

        camponome.value = ''
        camposenha.value = ''
        campoNovaSenha.value = ''
        campoNovoNome.value = ''

        for (let p = 0; p < usuarios.length; p++) {

            if (usuarios[p].nome == nome && usuarios[p].senha == senha) {

                usuarios[p].nome = novoNome
                usuarios[p].senha = novaSenha
                break

            }
        }
    }
    else {

        document.getElementById('senhacoincide').style.display = 'inline'
        document.getElementById('nomecoincide').style.display = 'inline'

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

