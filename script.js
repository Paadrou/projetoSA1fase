nomes = []
senhas = []

function cadastrar() {

    gerarUsuario()

    gerarSenhaUsuario()

}

function gerarSenhaUsuario() {

    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')

    let senha = camposenha.value
    let repitasenha = camporepitasenha.value

    let possenha = senhas.indexOf(senha)

    if (possenha == -1) {

        if (repitasenha == senha) {

            camporepitasenha.value = null
            camposenha.value = null

            senhas.push(senha)

        } else {


            alert('ta errado')

        }
    }
}

function gerarUsuario() {

    let camponome = document.getElementById('inputnome')
    let nome = camponome.value

    let posnome = nomes.indexOf(nome)

    if (nome != null) {

        if (posnome == -1) {

            camponome.value = null

            nomes.push(nome)

        }
    }
}

function excluir() {

    let camponome = document.getElementById('inputNomeExcluir')
    let camposenha = document.getElementById('inputSenhaExcluir')
    let camporepitasenha = document.getElementById('inputRepitaSenhaExcluir')

    let nome = camponome.value
    let senha = camposenha.value
    let repitasenha = camporepitasenha.value

    let posnome = nomes.indexOf(nome)
    let possenha = senhas.indexOf(senha)

    if (nome != "" && senha != "") {

        if (repitasenha == senha) {

            if (posnome != -1 && possenha != -1) {

                camponome.value = null
                camporepitasenha.value = null
                camposenha.value = null

                nomes.splice(posnome, 1)
                senhas.splice(possenha, 1)

            }
        } else {
            alert("ta errado")
        }
    }
}

function editar() {

    let camponome = document.getElementById('inputEditarNome')
    let camposenha = document.getElementById('inputEditarSenha')
    let campoNovoNome = document.getElementById('inputEditarNovoNome')
    let campoNovaSenha = document.getElementById('inputEditarNovaSenha')


    let nome = camponome.value
    let senha = camposenha.value
    let novoNome = campoNovoNome.value
    let novaSenha = campoNovaSenha.value

    let posnome = nomes.indexOf(nome)
    let possenha = senhas.indexOf(senha)

    if (nome != "" && senha != "" && novoNome != '' && novaSenha != '') {

        if (posnome != -1 && possenha != -1) {

            camponome.value = null
            camposenha.value = null
            campoNovaSenha.value = null
            campoNovoNome.value = null
            

            nomes(posnome) = novoNome
            senhas(possenha) = novaSenha

            alert(nomes)


        }
    }
}

function listar() {

    listagemsenhas.HTML.remove()

    let item = nomes

    let lista2 = "----------"

    let item2 = senhas

    lista2 += "<br>" + 'Usuario:' + item + ' Senha: ' + item2 + "<br>----------"


    listagemsenhas.innerHTML = lista2

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

