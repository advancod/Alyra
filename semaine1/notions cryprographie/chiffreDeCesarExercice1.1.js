
texteCesar = prompt("texte à chiffrer");
cleCesar = 1;

arrayTexteCesar = Array.from(texteCesar);
arrayTexteChiffreCesar = [];

for (i=0; i<arrayTexteCesar.length; i++){
arrayTexteChiffreCesar.push(String.fromCodePoint(arrayTexteCesar[i].charCodeAt(0)+cleCesar));
}
console.log(arrayTexteChiffreCesar.join(''));
