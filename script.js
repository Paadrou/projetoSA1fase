nomes = []
senhas = []

function cadastrar() {


    document.getElementById('nomecoincide').style.display = 'none'
    document.getElementById('senhacoincidecad').style.display = 'none'

    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')
    let camponome = document.getElementById('inputnome')

    let senha = camposenha.value
    let repitasenha = camporepitasenha.value
    let nome = camponome.value

    let possenha = senhas.indexOf(senha)
    let posnome = nomes.indexOf(nome)

    if (nome != null) {

        if (posnome == -1) {

            if (repitasenha == senha) {

                camporepitasenha.value = null
                camposenha.value = null
                camponome.value = null

                senhas.push(senha)
                nomes.push(nome)

            } else {

                document.getElementById('senhacoincidecad').style.display = 'inline'

            }

        } else {
            document.getElementById('nomecoincide').style.display = 'inline'
        }
    } else {
        document.getElementById('nomecoincide').style.display = 'inline'
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
            document.getElementById('senhacoincideex2').style.display = 'inline'
        }
    } else {
        document.getElementById('senhacoincideex').style.display = 'inline'
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

    let posnome = nomes.indexOf(nome)
    let possenha = senhas.indexOf(senha)

    if (nome != "" && senha != "" && novoNome != '' && novaSenha != '') {

        if (posnome != -1 && possenha != -1) {

            camponome.value = null
            camposenha.value = null
            campoNovaSenha.value = null
            campoNovoNome.value = null

            listar()

            nomes[posnome] = novoNome
            senhas[possenha] = novaSenha

        }else{

            document.getElementById('senhacoincide').style.display = 'inline'
            document.getElementById('nomecoincide').style.display = 'inline'
            
        }

    }
}

function listar() {

    let lista2 = ''
    let item = ''
    let item2 = ''
    for (let i = 0; i < [senhas.length]; i++) {

        item = senhas[i]
        item2 = nomes[i]
        lista2 += "<br>" + 'Usuario:' + item2 + ' Senha:' + item + "<br>----------"

    }

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
    listagemsenhas.HTML.remove()
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

