nomes = []
senhas = []

function cadastrar() {

    let nome = gerarUsuario()

    let senha = gerarSenhaUsuario()

    nomes.push(nome)

    senhas.push(senha)

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

            return { senha }

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

            return { nome }

        }
    }
}

function listar() {
        let lista = "----------"
    
        let item = nomes[nomes.length -1].nome
            lista +=  '<br>' + item + "<br>----------"
        
        listagemnomes.innerHTML = lista

        let lista2 = "----------"
    
        let item2 = senhas[senhas.length -1].senha

            lista2 +=  "<br>" + item2 + "<br>----------"
        
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