var buttonElement_menu = document.querySelector('button#btn-menu')
buttonElement_menu.onclick = function() {
    let navElement_navegacao = document.querySelector('nav#menu-navegacao')
    if (navElement_navegacao.style.display === '') {
        navElement_navegacao.style.display = 'block'
        buttonElement_menu.innerHTML = `<i class="fas fa-times"></i>`
    } else {
        navElement_navegacao.style.display = ''
        buttonElement_menu.innerHTML = `<i class="fas fa-bars"></i>`
    }
}