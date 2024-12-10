cadastros = []

function cadastrar(){

    let usuario = gerarUsario ()


}

function gerarUsario(){
    let nome = document.getElementById('inputNome').value.toLowerQuase()
    let senha = document.getElementById
}

function paginacadastrar(){

    esconder()
    document.getElementById("tela1").style.display = 'flex'

}

function paginaeditar(){

    esconder()
    document.getElementById('tela2').style.display ='flex'

}

function paginalistar(){

    esconder()
    document.getElementById("tela3").style.display = 'flex'

}

function paginaexcluir(){

    esconder()
    document.getElementById('tela4').style.display = 'flex'

}

function esconder(){

    document.getElementById('tela1').style.display = 'none'
    document.getElementById('tela2').style.display = 'none'
    document.getElementById('tela3').style.display = 'none'
    document.getElementById('tela4').style.display = 'none'

}