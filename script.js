cadastros = []

function cadastrar() {

    let usuario = gerarUsuario()
    cadastros.push(usuario)

}

function gerarUsuario() {

    let camponome = document.getElementById('inputnome')
    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')

    let nome = camponome.value.toLowerCase()
    let senha = camposenha.value
    let repitasenha = camporepitasenha.value

    usuario = { nome, senha }

    camponome.value = null
    camporepitasenha.value = null
    camposenha.value = null

    let pos = cadastros.indexOf(senha, nome)
    if (nome != null && senha != null) {

        if (pos == -1) {

            if (repitasenha == senha) {

                return usuario

            } else {

                alert('ta errado zé')

            }
        }
    }
}


function paginacadastrar() {

    esconder()
    document.getElementById("tela1").style.display = 'flex'

}

function paginalistar() {

    esconder()
    document.getElementById("tela2").style.display = 'flex'
}

function listar() {
    let convidados = "----------"

    for (let item of cadastros) {
        convidados += "<br>" + item.toUpperCase() + "<br>----------"
    }
    lista.innerHTML = convidados
}

function paginaeditar() {

    esconder()
    document.getElementById('tela3').style.display = 'flex'

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