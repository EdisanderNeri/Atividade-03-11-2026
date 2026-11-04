 let seletor = document.getElementById('seletorCores');
        let paragrafo = document.getElementById('textoParaColorir');

        
        seletor.addEventListener('change', function() {
         
            const corEscolhida = seletor.value;

            
            if (corEscolhida === 'vermelho') {
                paragrafo.style.color = 'red';
            } else if (corEscolhida === 'azul') {
                paragrafo.style.color = 'blue';
            } else if (corEscolhida === 'verde') {
                paragrafo.style.color = 'green';
            } else {
                paragrafo.style.color = 'black'; 
            }
        });