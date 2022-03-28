    function myfunction() {
        //creo una variabile che mi tenga nota dei kl da percorrere
        const kl_da_percorrere = document.getElementById(`trip`).value
        const myName = document.getElementById('myName').value
            //creo una variabile di input con il quale attiverò tutto
        const generate = document.getElementById(`genera`);

        //prezzo al kl
        const prezzo_al_kilometro = 0.21;
        //stampo prezzo
        const prezzo_biglietto = kl_da_percorrere * prezzo_al_kilometro
        console.log(prezzo_biglietto);
        //genero un imponibile per i minori
        const imponibile_minori = 0.20
            //genero un imponibile per i maggiori di 65
        const imponibile_maggiori = 0.4
            //mi ricavo il prezzo dei minori 
        const sconto_minori = prezzo_biglietto * imponibile_minori
            /* console.log(`prezzo imponibile minori  ` + prezzo_minori); */
            //mi ricavo il prezzo dei maggiori
        const sconto_maggiori = prezzo_biglietto * imponibile_maggiori
            /* console.log(prezzo_maggiori); */
        const age = document.getElementById(`età`).value
        if (age === `sotto i 14 anni`) {
            //creo una variabile di prezzo per i minori di 14 anni
            const prezzo_mino ri = prezzo_biglietto - sconto_minori

            document.getElementById("nome_passeggero").innerHTML = myName
            document.getElementById("prezzo").innerHTML = prezzo_maggiori.toFixed(2)
            console.log(prezzo_minori.toFixed(2));
        } else if (age === `sopra i 65 anni`) {
            const prezzo_maggiori = prezzo_biglietto - sconto_maggiori
            document.getElementById("nome_passeggero").innerHTML = myName
            document.getElementById("prezzo").innerHTML = prezzo_maggiori.toFixed(2)
            console.log(prezzo_maggiori.toFixed(2));
        }
    }