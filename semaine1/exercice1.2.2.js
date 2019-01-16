// On saisi un tableau de transactions à deux dimensions
// On fait les ratio pourboir / taille de la transaction
// On tri les transactions par efficacité dans un nouveau tableau a deux dimensions
// On injecte une a une les transactions du nouveau tableau dans une pile de transaction si le total de pourboire ne dépasse pas 6000

transactions = [
    [2000, 13000],
    [6000, 9000],
    [800, 2000],
    [700, 1500],
    [1200, 3500],
    [1000, 2800],
    [1300, 5000],
    [600, 1500]
   ];

transactionsSorted = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
   ];

pile = [
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0],
    [0, 0]
   ];

ratios = [];
ratiosSorted = [];
ratiosTemp= [];

decrement = transactions.length - 1;
total = 0;
maxBlock = 6000;

for (i=0; i<transactions.length; i++){
    ratios[i]=transactions[i][1]/transactions[i][0];
    ratiosTemp[i]=transactions[i][1]/transactions[i][0];
}

console.log("ratios : " + ratios);
ratiosSorted = ratiosTemp.sort();
console.log("ratiosTriés : " + ratiosSorted);

for (j=0; j<ratiosSorted.length; j++){
    console.log("ratio à trouver: " + ratiosSorted[j]);
    for (k=0; k<transactions.length; k++){
    console.log("transaction : " + transactions[k]);
    console.log("ratios : " + ratios[k]);
        if (ratios[k] == ratiosSorted[j]){
            transactionsSorted[j][0] = transactions[k][0];
            transactionsSorted[j][1] = transactions[k][1];
            transactions[k] = [0, 0];
        }
    }
}

console.log("transactions triées : " + ratiosSorted[j]);
console.log(transactionsSorted);

while(total < maxBlock && decrement > 0 ){
    pile[decrement][0] = transactionsSorted[decrement][0];
    pile[decrement][1] = transactionsSorted[decrement][1];
    console.log(transactionsSorted[decrement]);
    total = total + pile[decrement][0];
    if (total > maxBlock){
        pile[decrement][0] = 0;
        pile[decrement][1] = 0;
        total = total - pile[decrement][0];
    }
    decrement = decrement - 1;
}
console.log("voici la liste des transaction à intégrer de le block de 6000 pour se faire plaiz : ");
console.log(pile);