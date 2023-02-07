const menuNav = document.querySelectorAll('.menu a')

function getDistanceFromTheTop(element) {
    const id = element.getAttribute("href")
     return document.querySelector(id).offsetTop
}

function nativeScroll(DistanceFromTheTop) {
    window.scroll ({
        top: DistanceFromTheTop,
        behavior: "smooth"
    })
}

function scrollToSection(event) {
    event.preventDefault()
    const DistanceFromTheTop = getDistanceFromTheTop(event.target) - 20
    nativeScroll(DistanceFromTheTop)
}

menuNav.forEach((link) => {
    link.addEventListener( "click", scrollToSection)
})


const botao = document.querySelector('.titulos')

botao.addEventListener('click', function(event){
    document.querySelector('#titulos')
    .classList.add('fade')
})

