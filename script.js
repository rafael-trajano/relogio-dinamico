const msg = window.document.getElementById("msg")
const saudacao = window.document.getElementById("saudacao")

function carregar(){
    const data = new Date()
    const hora = data.getHours()
    let minutos = data.getMinutes()
    
    if (minutos < 10) {
    minutos = "0" + minutos
    }

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`
    
    document.body.classList.remove("manha", "tarde", "noite")
    if (hora < 12) {
        document.body.classList.add("manha")
        saudacao.innerHTML = `Bom dia!`
    } else if (hora < 18) {
        document.body.classList.add("tarde")
        saudacao.innerHTML = `Boa tarde!`
    } else {
         document.body.classList.add("noite")
        saudacao.innerHTML = `Boa noite!`
    }

    document.body.classList.add("animado")
}
carregar()
setInterval(carregar, 1000)

