function comparar () {
    let tn1 = document.getElementById("txtn1")
    let tn2 = document.getElementById("txtn2")
    let resultado = document.getElementById("res")
    let n1 = Number(tn1.value)    
    let n2 = Number(tn2.value)
    let soma = n1 + n2
    resultado.innerHTML = soma
      if (n1 > n2) {
        resultado.innerHTML = `O primeiro número (<strong>${n1}</strong>) é <strong>maior</strong> que o segundo (<strong>${n2}</strong>).`
    } else if (n2 > n1) {
        resultado.innerHTML = `O segundo número (<strong>${n2}</strong>) é <strong>maior</strong> que o primeiro (<strong>${n1}</strong>).`
    } else {
        resultado.innerHTML = `Os dois números são <strong>iguais</strong> (<strong>${n1}</strong>).`
    }
}