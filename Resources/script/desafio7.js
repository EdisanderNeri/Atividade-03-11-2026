let button = document.querySelector("button")
let nome = document.getElementById("Nome")
let n1 = document.getElementById("Nota1")
let n2 = document.getElementById("Nota2")
let n3 = document.getElementById("Nota3")
let Aprovado = document.getElementById("verde")
let Reprovado = document.getElementById("vermelha")

button.addEventListener("click", () => {
   
    Aprovado.innerText = ""
    Reprovado.innerText = ""

    let media = (+n1.value + +n2.value + +n3.value) / 3

    if(media >= 7) {
        Aprovado.style.color = "green"
       
        Aprovado.innerText = `${nome.value}, você está Aprovado! Sua média foi ${media.toFixed(1)}`
    } else {
        Reprovado.style.color = "red"
        
        Reprovado.innerText = `${nome.value}, você está Reprovado. Sua média foi ${media.toFixed(1)}`
    }
})
