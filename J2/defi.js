var number = Math.floor(Math.random()*100);
var resultat = prompt("entrez un nombre entre 1 et 100");
var bool = 0;
var step = 0;
var diff1 = 0;
var diff2 = 0;
while(bool == 0){
    if (resultat > number){
        if ( step == 0){
            resultat = prompt("essaye encore, trop grand");
            diff1=resultat-number;
            step = 1;
        }
        else {
            diff2 = resultat - number;
            if ( diff1 > diff2){
                resultat = prompt("essaye encore, trop grand, tu t'approche");
            }
            else {
                resultat = prompt("essaye encore, trop grand, tu t'eloigne");
                }
            diff2 = diff1;
            }
    }
    else if (resultat < number){
        if ( step == 0){
            resultat = prompt("essaye encore, trop petit");
            diff1=number-resultat;
            step = 1;
        }
        else {
            diff2 = number - resultat;
            if ( diff1 > diff2){
                resultat = prompt("essaye encore, trop petit, tu t'approche");
            }
            else {
                resultat = prompt("essaye encore, trop petit, tu t'eloigne");
                }
            diff2 = diff1;
            }
    }
    else {
    bool = 1;
    console.log("bingo!!!");
    step + 1;
    }
}

// faire version ordinateur cherche la réponse

