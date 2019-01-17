condensatVigenere = prompt("texte encrypté");
cleVegenere = prompt("clé à appliquer (doit contenir le même nombre de caractères que le texte)");

arrayCondensatVigenere = Array.from(condensatVigenere.trim());
arrayCleVigenere = Array.from(cleVegenere.trim());

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

arrayCondensatVigenereTemp = [];
arrayCleVigenereTemp = [];

decryptedValue = '';
arrayTexteOrigineVigenere = [];

for (i=0; i<arrayCondensatVigenere.length; i++){
    if (arrayCondensatVigenere[i] != ' '){
        arrayCondensatVigenereTemp.push(arrayCondensatVigenere[i]);
    }
}
for (j=0; j<arrayCleVigenere.length; j++){
    if (arrayCleVigenere[j] != ' '){
        arrayCleVigenereTemp.push(arrayCleVigenere[j]);
    }
}

if (arrayCleVigenereTemp.length != arrayCondensatVigenereTemp.length){
    console.log('il faut saisir deux chaines de caractère de même taille');
}
else {
    for (k=0; k<arrayCleVigenereTemp.length; k++){
        for (l=0; l<positionLettres.length; l++){
            if (positionLettres[l][0] == arrayCleVigenereTemp[k]){
                decryptedValue = String.fromCodePoint(arrayCondensatVigenereTemp[k].charCodeAt(0) - positionLettres[l][1]);
                // en optionel il aurait suffit ici de mettre la condition sur l'encryptage et le decryptage, comme
                // il s'agit d'une encryptio symétrique il aurait suffit de switcher entre addition et soustration 
            }
        }
        arrayTexteOrigineVigenere.push(decryptedValue);
    }
    console.log(arrayTexteOrigineVigenere.join(''));
}
