nomes = []
senhas = []

function cadastrar() {

    let nome, senha = gerarUsuario()
    nomes.push(nome)
    senhas.push(senha)


}

function gerarUsuario() {

    let camponome = document.getElementById('inputnome')
    let camposenha = document.getElementById('inputsenha')
    let camporepitasenha = document.getElementById('inputrepitasenha')

    let nome = camponome.value
    let senha = camposenha.value
    let repitasenha = camporepitasenha.value

    usuario = { nome, senha }

    let posnome = nome.indexOf(nome)
    let possenha = senha.indexOf(senha)

    if (nome != null && senha != null) {

        if (posnome == -1) {

            if (possenha == -1) {

                if (repitasenha == senha) {

                    camponome.value = null
                    camporepitasenha.value = null
                    camposenha.value = null

                    return { nome, senha }

                } else {

                    alert('ta errado')

                }
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

function entrar() {
    let lista = "----------"

    for (let item of nome && senha) {
        lista += "<br>" + item + "<br>----------"
    }
    listagem.innerHTML = lista
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