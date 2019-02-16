const CIBLE_MAX = 2.7 * Math.pow(10,67);

// Exercice 1.1:
// Ecrire une fonction qui convertit la cible en difficulté.

function calculerDifficulte(cible){

    return  CIBLE_MAX/cible;
    
}

//////////////////////////////////

// Exercice 1.2:
// Ecrire une fonction qui étant donné le champ Bits d’un bloc en déduit la difficulté


function calculerDifficulteFromBits(Bits){

   //
    
}

//////////////////////

//Exercice 1.3
//Ecrire une fonction qui détermine s’il s’agit d’un bloc pendant lequel la difficulté est réajustée ou non.

function determineBlock(BlockNumber){

    if(BlockNumber % 2016 == 0){
       return true;
    }
    else {
        return false;
    }   
     
 }

//////////////////////

//Exercice 2.0
//Ecrire une fonction qui, étant donné une hauteur de bloc, calcule la récompense associée à ce bloc. 

let RECOMPENSE = 50;

function blockLevel(BlockNumber2){
  
hauteurBlock = Math.floor(BlockNumber2/210000);
for(i=0;i<hauteurBlock;i++){
    
    RECOMPENSE = RECOMPENSE/hauteurBlock;
    
    }

    return RECOMPENSE;
}

//////////////////////

//Exercice 2.1
//Ecrire une fonction qui, étant donné une hauteur de bloc, calcule le nombre total de bitcoins en circulation lors de la publication de ce bloc. Le graphique ci-dessus peut vous aider;

let BITCOINS = 0;
let CURRENT_RECOMPENSE = 0;

function totalBitcoins(BlockNumber2){

for(j=0;j<BlockNumber2;j++){

    CURRENT_RECOMPENSE = 50;
    hauteurBlock = Math.floor(BlockNumber2/210000);

    for(i=0;i<hauteurBlock;i++){
    
    CURRENT_RECOMPENSE = CURRENT_RECOMPENSE/hauteurBlock;
    
    }

    BITCOINS = BITCOINS + CURRENT_RECOMPENSE;

}

return BITCOINS;

}

//////////////////////

//Exercice 2.2
//Ecrire un programme qui prend en paramètre une date et retourne la récompense actuelle et le nombre total de bitcoins en circulation à cette date.

let birthBitcoin = '03-01-2018';

function totalBitcoinsByDate(yearDate){

//

}

//////////////////////
//TESTS
//exercice 1.1 :
console.log(calculerDifficulte('1147152896345386682952518188670047452875537662186691235300769792000'));
//exercice 1.2 :
console.log(calculerDifficulteFromBits('0x1c0ae493'));
//exercice 1.3 :
console.log(determineBlock('556416'));
//exercice 2.0 :
console.log(blockLevel('556416'));
//exercice 2.1 :
console.log(totalBitcoins('556416'));
//exercice 2.1 :
console.log(totalBitcoinsByDate('01-01-2100'));




