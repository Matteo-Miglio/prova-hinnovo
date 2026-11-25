# Test Controllo Pagamento

La funzione controlla che i tipi di dato delle liste siano corretti id e importo devono essere numerici, lo stato deve essere una stringa, riporta in console il numero del ciclo con i dati non corretti ma prosegue il conteggio nei casi approvati
ritorna un oggetto con il totale di somme eseguite.

## Usata versione Node.js v25.9.0

## Come eseguire 
comando: node script.js

la console mostrerà: 

```
i totali del test1 corrispondono
al ciclo numero 0 i tipi di dato non sono corretti
al ciclo numero 2 i tipi di dato non sono corretti
i totali del test2 corrispondono
```

- **i totali del test1 corrispondono**: il test1 ha passato il test, e tutti i campi erano corretti per formato.
- **al ciclo numero 0 / 2 i tipi di dato non sono corretti**: quegli ordini non hanno soddisfatto i requisiti per essere sommati.
- **i totali del test2 corrispondono**: il test2 ha passato il test, ma 2 cicli non sono stati accettati.

## Spiegazione
- Decimali, utilizzato il Math.round(x*100)/100 per evitare l'errore di precisione causato da js
- Ordini non validi, utilizzato un controllo per verificare la tipologia del dato solo quelli accettati passano allo step della somma e conteggio, gli scartati non bloccano la funzione
- Stato, fatto un doppio controllo per maiuscole e spazi aggiuntivi in modo da evitare che un " pagAto" non venisse conteggiato

## Test 

- Test1 verifica che a differenza di stato (in_attesa/annullato) con tutti i dati perfetti non venga conteggiato
- Test2 verifica che con parti di lista errate il compito venga svolto ugualmente
