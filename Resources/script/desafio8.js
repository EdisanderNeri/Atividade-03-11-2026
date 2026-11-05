let input = document.querySelector("input");
let button = document.querySelector("button");
let p1 = document.getElementById("sucessor");
let p2 = document.getElementById("antecessor");

button.addEventListener("click", () => {
    
    let numero = Number(input.value);

  
    if (input.value !== "" && !isNaN(numero)) {
        let antecessor = numero - 1;
        let sucessor = numero + 1;

        p1.textContent = `Sucessor: ${sucessor}`;
        p2.textContent = `Antecessor: ${antecessor}`;
    } else {
        alert("Por favor, digite um número válido!");
    }
});
