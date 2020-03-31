let myString
myString = 'HochkommaString'
let stringMitHTML = '<b>bold text</b>'

/* AUSDRUCK vs ANWEISUNG */
/* en: expression vs statement */

console.log('text');

/* document.getElementById('par_iT').innerText = myString // HochkommaString
document.getElementById('par_iH').innerHTML = myString // HochkommaString
document.getElementById('out_v').value = myString // HochkommaString
document.getElementById('out_iT').innerText = myString // HochkommaString */


document.getElementById('par_iT').innerText = stringMitHTML // <b>bold text</b>
document.getElementById('par_iH').innerHTML = stringMitHTML // bold text
document.getElementById('out_v').value = stringMitHTML // <b>bold text</b>
document.getElementById('out_iT').innerText = stringMitHTML

let par = document.getElementById('par_iT')
console.log('par :', par)
console.log(par);
console.info('Info FYI')
console.error('Fehler in der Zeile 25: ', par);


