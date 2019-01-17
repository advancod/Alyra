texteVigenere = prompt("texte à chiffrer");
cleVegenere = prompt("clé à appliquer (doit contenir le même nombre de caractères que le texte)");

arrayTexteVigenere = Array.from(texteVigenere.trim());
positionLettres = [
    ['a', 1],
    ['b', 2],
    ['c', 3],
    ['d', 4],
    ['e', 5],
    ['f', 6],
    ['g', 7],
    ['h', 8],
    ['i', 9],
    ['j', 10],
    ['k', 11],
    ['l', 12],
    ['m', 13],
    ['n', 14],
    ['o', 15],
    ['p', 16],
    ['q', 17],
    ['r', 18],
    ['s', 19],
    ['t', 20],
    ['u', 21],
    ['v', 22],
    ['w', 23],
    ['x', 24],
    ['y', 25],
    ['z', 26]
   ];

arrayCleVigenere = Array.from(cleVegenere.trim());

arrayTexteVigenereTemp = [];
arrayCleVigenereTemp = [];

encryptValue = '';
arrayResultVigenere = [];

for (i=0; i<arrayTexteVigenere.length; i++){
    if (arrayTexteVigenere[i] != ' '){
        arrayTexteVigenereTemp.push(arrayTexteVigenere[i]);
    }
}
for (j=0; j<arrayCleVigenere.length; j++){
    if (arrayCleVigenere[j] != ' '){
        arrayCleVigenereTemp.push(arrayCleVigenere[j]);
    }
}

if (arrayCleVigenereTemp.length != arrayTexteVigenereTemp.length){
    console.log('il faut saisir deux chaines de caractère de même taille');
}
else {
    for (k=0; k<arrayCleVigenereTemp.length; k++){
        for (l=0; l<positionLettres.length; l++){
            if (positionLettres[l][0] == arrayCleVigenereTemp[k]){
                encryptValue = String.fromCodePoint(arrayTexteVigenereTemp[k].charCodeAt(0) + positionLettres[l][1]);
            }
        }
        arrayResultVigenere.push(encryptValue);
    }
    console.log(arrayResultVigenere.join(''));
}
