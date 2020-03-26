/**
 * CALCOLO BIGLIETTI DEL TRENO
 */

 var distance
 var age
 var price
 var discount20
 var discount40

 //Numero dei chilometri da percorrere
 distance = parseInt(prompt('Quanti chilometri desidera percorrere?') );

console.log('Distanza da percorrere: ' + distance + ' km');

 //Età del passeggero
 age = parseInt(prompt('Qual è la sua età?') );

 console.log('Età cliente: ' + age + ' anni');

 // Calcolo del prezzo del biglietto
 price = 0.21;
 price *= distance;

 console.log('Prezzo: ' + price.toFixed(2) + ' €');

 //Sconto del 20% per i minorenni e del 40% per gli over 65
discount20 = (price * 20/100).toFixed(2);

discount40 = (price * 40/100).toFixed(2);


if (age < 18) {
    console.log('Sconto del 20%: ' + discount20 + ' €');
    console.log('Prezzo del biglietto scontato: ' + (price - discount20).toFixed(2) + ' €' );
    document.getElementById('prezzo-biglietto').innerHTML = (price - discount20).toFixed(2) + ' €';
    document.getElementById('avviso-sconto').innerHTML = 'Il prezzo è stato scontato del 20% vista la minore età.';
} 
else if (age >= 18 && age <= 65) {
    console.log('Prezzo del biglietto: ' + price.toFixed(2) );
    document.getElementById('prezzo-biglietto').innerHTML = price.toFixed(2) + ' €';
}
else if (age > 65) {
    console.log('Sconto del 40%: ' + discount40 + ' €');
    console.log('Prezzo del biglietto scontato: ' + (price - discount40).toFixed(2) + ' €' ); 
    document.getElementById('prezzo-biglietto').innerHTML = (price - discount40).toFixed(2) + ' €';
    document.getElementById('avviso-sconto').innerHTML = 'Il prezzo è stato scontato del 40% vista l\'età.';
}
else {
    console.log('Errore');
    document.getElementById('prezzo-biglietto').innerHTML = 'Errore';
}

//Mostrare a schermo
// if (age < 18) {
//     document.getElementById('prezzo-biglietto').innerHTML = (price - discount20).toFixed(2) + ' €' + ' Il prezzo è stato scontato del 20% vista la minore età.';
// } 
// else if (age >= 18 && age <= 65)  {
//     document.getElementById('prezzo-biglietto').innerHTML = price.toFixed(2) + ' €';
// }
// else if (age > 65) {
//     document.getElementById('prezzo-biglietto').innerHTML = (price - discount40).toFixed(2) + ' €' + ' Il prezzo è stato scontato del 40% vista l\'età.';
// }
// else {
//     document.getElementById('prezzo-biglietto').innerHTML = 'Errore';
// }






 
 