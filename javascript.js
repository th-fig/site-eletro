const frm = document.querySelector('form')

        frm.addEventListener('submit', (e) => {
            const largura = frm.largura.value;
            const comprimento = frm.comprimento.value;
            const area = largura * comprimento;
            const perimetro = largura * 2 + comprimento * 2;
            const tipo = frm.tipo.value;
            let tomadas = 0;
            let luz = 0;
            let tomada600 = 0;
            let tomada100 = 0;

            // Cálculo lâmpada

            luz = area <= 6 ? 100 : 100 + Math.floor((area - 6) / 4) * 60;

            // Cálculo tomada
            if (tipo == 'servico') {
                tomadas = Math.ceil(perimetro / 3.5);
                tomada600 = tomadas < 3? tomadas: 3;
                tomada100 = tomadas - tomada600;
            } else {
                tomadas = Math.ceil(perimetro / 5);
                tomada100 = tomadas;
            }

            resposta.innerHTML = `
            <p>Área: <span>${area}m²</span> | Perímetro: <span>${perimetro}m</span></p>
            <p>Lâmpadas: <span>${luz}VA</span> | Tomadas: <span>${tomadas}</span></p>
            <p>T. 600VA: <span>${tomada600}</span> | T. 100VA: <span>${tomada100}</span></p>
            <hr>
            `;
            e.preventDefault()
        })