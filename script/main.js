// Comportamento do botão menu.
var buttonElement_menu = document.querySelector('button#btn-menu')
buttonElement_menu.onclick = function () {
    let navElement_navegacao = document.querySelector('nav#menu-navegacao')
    if (navElement_navegacao.style.display === '') {
        navElement_navegacao.style.display = 'block'
        buttonElement_menu.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        navElement_navegacao.style.display = ''
        buttonElement_menu.innerHTML = `<i class="fas fa-bars"></i>`
    }
}

// Comportamento do botão de Whatsapp
var buttonElement_whats = document.querySelector('button#btn-whats')
buttonElement_whats.onclick = function () {
    let inputElement_telefone = document.getElementsByName('telefone')[0]
    if (inputElement_telefone.value.length < 11 || Number(inputElement_telefone.value) != inputElement_telefone.value) {
        alert('ERRO: Insira ou verifique o número de telefone no campo ao lado.')
    } else {
        alert(`Enviamos um whats para o seu celular (${inputElement_telefone.value}), interaja conosco por lá. :)`)
        inputElement_telefone.value = ''
    }
}

// Coloca o ano atual no rodapé da página.
var data = new Date()
var spanElement_ano = document.querySelector('span.ano-atual')
spanElement_ano.innerHTML = `${data.getFullYear()}`

// Coloca o nome do desenvolvedor no rodapé da página utilizando a api do GitHub.
var conector = new XMLHttpRequest()
conector.open('GET', 'https://api.github.com/users/hugobrandao-dev')
conector.send(null)
conector.onreadystatechange = function () {
    if (conector.readyState === 4) {
        let spanElement_dev = document.querySelector('span.dev-nome')
        let nome = JSON.parse(conector.responseText).name
        spanElement_dev.innerHTML = `${nome}`
    }
}