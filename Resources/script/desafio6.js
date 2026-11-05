let button = document.querySelector("button")
let txtn1 = document.getElementById("n1")

button.addEventListener("click", () => {
 
    let n1 = Number(txtn1.value)

    if (n1 % 2 === 0) {
        alert("Seu número é par")
    } else {
        alert("Seu número é ímpar")
    }
})
