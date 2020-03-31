let myString
myString = "'HochkommaString'"
let stringMitHTML = '<b>bold text</b>'

/* AUSDRUCK vs ANWEISUNG */
/* en: expression vs statement */

console.log('text');

/* document.getElementById('par_iT').innerText = myString // HochkommaString
document.getElementById('par_iH').innerHTML = myString // HochkommaString
document.getElementById('out_v').value = myString // HochkommaString 
document.getElementById('out_iT').innerText = myString // HochkommaString  */

document.getElementById('par_iT').innerText = stringMitHTML // <b>bold text</b>
document.getElementById('par_iH').innerHTML = stringMitHTML // bold text
document.getElementById('out_v').value = stringMitHTML // <b>bold text</b>
document.getElementById('out_iT').innerText = stringMitHTML // HochkommaString  

let par = document.getElementById('par_iT')
console.log('par :', par);

console.info('Info für mich!');

console.log('object :', par);
console.log(par);
console.error(par);