cleAB = prompt("choisir les clés A,B tels que 4A³+27B² = 0");
cleA = cleAB.split(',')[0];
cleB = cleAB.split(',')[1];
if (4*cleA^3+27*cleB^2 != 0){
    arrayTexteVigenereTemp.push(arrayTexteVigenere[i]);
}
else{
    console.log("condition initiale non remplie");
}

cleCD = prompt("choisir les clés C,D tels que 4C³+27D² = 0");
cleC = cleCD.split(',')[0];
cleD = cleCD.split(',')[1];
if (4*cleC^3+27*cleD^2 != 0){
    arrayTexteVigenereTemp.push(arrayTexteVigenere[i]);
}
else{
    console.log("condition initiale non remplie");
}

xy = prompt("choisir un point du plan (coordonnées (x,y)");
x = x.split(',')[0];
y = y.split(',')[1];

function equivalence(cleAB,cleCD) {
    // Je sèche
}

if (y^2==x^3+cleA*x+cleB){
    console.log("le point se trouve bien sur la première courbe");
}
else{
    console.log("le point ne se trouve pas sur la première courbe");
}

if (y^2==x^3+cleC*x+cleD){
    console.log("le point se trouve bien sur la deuxième courbe");
}
else{
    console.log("le point ne se trouve pas sur la deuxième courbe");
}
