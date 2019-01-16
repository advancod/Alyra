// On saisi un tableau de transactions à deux dimensions
// On fait les ratio pourboir / taille de la transaction
// On tri les transactions par efficacité dans un nouveau tableau a deux dimensions
// On injecte une a une les transactions du nouveau tableau dans une pile de transaction si le total de pourboire ne dépasse pas 6000

let transactions = [
    [2000, 13000],
    [6000, 9000],
    [800, 2000],
    [700, 1500],
    [1200, 3500],
    [1000, 2800],
    [1300, 5000],
    [600, 1500]
   ];

let pile = [];
let ratios = [];
let ratiosSorted = [];
let transactionsSorted = [];

let increment = 0;
let total = 0;
let maxBlock = 6000;
let currentRatio = 0;

for (i=0; i<length.transactions; i++){
    ratios[i]=transactions[i][1]/transactions[i][0];
}

ratiosSorted = ratios.sort();
for (j=0; j<length.ratiosSorted; j++){
    currentRatio = ratiosSorted[j]
    for (k=0; k<length.transactions; k++){
        if (ratios[k] == currentRatio){
            transactionsSorted[j][0] = transactions[k][0];
            transactionsSorted[j][1] = transactions[k][1];
        }
    }
}

while(total < maxBlock){
    pile[increment][0] = transactionsSorted[increment][0];
    pile[increment][1] = transactionsSorted[increment][1];
    total = total +  pile[increment][1];
    if (total > maxBlock){
        pile[increment][0] = 0;
        pile[increment][1] = 0;
    }
    increment = increment + 1;
}

console.log(pile);




