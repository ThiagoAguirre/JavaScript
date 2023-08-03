let digiteUmaString = 'Um texto';
let frase = 'O rato roeu a roupa do rei de roma!'; 

console.log(digiteUmaString);
console.log(digiteUmaString[1]);
console.log(digiteUmaString.charAt(1));
console.log(digiteUmaString.indexOf('o', 7));
console.log(digiteUmaString.lastIndexOf('m', 1));
console.log(`${digiteUmaString} sobre rpg` );
console.log(digiteUmaString.concat(' de lieratura'));
console.log(digiteUmaString + ' sobre a cuinaria brasileira');
console.log(digiteUmaString.match(/[a-z]/));
console.log(digiteUmaString.search(/x/));
console.log(digiteUmaString.replace(/Um/, 'O grade'));
console.log(frase.replace(/r/g, 'D'));
console.log(frase.length);
console.log(frase.slice(2,6));
console.log(frase.slice(-5));
console.log(frase.split(' '))
console.log(frase.toUpperCase());
console.log(frase.toLocaleLowerCase());
