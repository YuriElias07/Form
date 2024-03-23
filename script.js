const nome = document.querySelector("#nome")
const email = document.querySelector("#email")
const senha = document.querySelector("#senha")
const botao =  document.querySelector("#botao")
const div = document.querySelector("#div")
const p = document.createElement("p")
const form = document.querySelector("#form")

function verificar(event) {
    event.preventDefault()
    if (nome.value.length > 0 && senha.value.length > 0 && email.value.length > 0) {
        p.textContent = `Bem-vindo(a), ${nome.value}! 🤝` 
        div.append(p)
        div.classList.remove("div2")
        div.classList.add("div1")
    } else{
        div.classList.remove("div1")
        div.classList.add("div2")
        p.textContent = `ERRO 🖕`
        div.append(p)
    } 

}




form.addEventListener("click", verificar)