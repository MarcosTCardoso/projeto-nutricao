function clickMenu() {
    if (nav.style.display == 'block') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'block'
    }
}

function calcularImc() {
    let peso = document.querySelector('input#peso').value
    let altura = document.querySelector('input#altura').value
    alert(`Esse é seu peso: ${peso} e sua altura é de ${altura}`)
}