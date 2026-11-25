import assert from "node:assert"


const primoEsempio = [
    {
        id: 0,
        importo: 4.2,
        stato: "in_attesa "
    },
    {
        id: 1,
        importo: 5.1,
        stato: " pagato"
    },
    {
        id: 2,
        importo: 7.4,
        stato: "  paGato  "
    }
]

const secondoEsempio = [
    {
        id: null,
        importo: NaN,
        stato: undefined
    },
    {
        id: 1,
        importo: 5.2,
        stato: " pagato"
    },
    {
        id: 2,
        importo: "7.3",
        stato: NaN
    }
]



function ControlloPagamento(ordini) {
    
    let somma = 0
    let count = 0

    for (let i = 0; i <= ordini.length - 1; i++) {

        let checkStato = ordini[i].stato
        let tipoDato = typeof checkStato


        if (Number.isFinite(ordini[i].id) && Number.isFinite(ordini[i].importo) && tipoDato === "string") {
            
            if(ordini[i].stato.toLowerCase().trim() === "pagato"){
                somma += ordini[i].importo
                count++
                somma = Math.round(somma*100)/100
                
            }
        

        }else console.log(`al ciclo numero ${i} i tipi di dato non sono corretti`);
        

    }
   
    return {totale: somma , cicli: count}
    
}


const test1 = ControlloPagamento(primoEsempio)
assert.deepStrictEqual(test1, {totale:12.5, cicli:2})
console.log("i totali del test1 corrispondono");


const test2 = ControlloPagamento(secondoEsempio)
assert.deepStrictEqual(test2, {totale:5.2,cicli:1})
console.log("i totali del test2 corrispondono");

