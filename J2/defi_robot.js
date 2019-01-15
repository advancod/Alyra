var number = Math.floor(Math.random()*100);
console.log("entrez un nombre entre 1 et 100");
var bool = 0;
var play = prompt("On joue?");
var step = 0;
var diff1 = 0;
var diff2 = 0;
while(play == 1){
while(bool == 0){
    var resultat = Math.floor(Math.random()*100);
    console.log("moi machine je propose : " + resultat );
    if (resultat > number){
        if ( step == 0){
            console.log("essaye encore, trop grand");
            diff1=resultat-number;
            step = 1;
        }
        else {
            diff2 = resultat - number;
            if ( diff1 > diff2){
                console.log("essaye encore, trop grand, tu t'approche");
            }
            else {
                console.log("essaye encore, trop grand, tu t'eloigne");
                }
            diff2 = diff1;
            }
    }
    else if (resultat < number){
        if ( step == 0){
            console.log("essaye encore, trop petit");
            diff1=number-resultat;
            step = 1;
        }
        else {
            diff2 = number - resultat;
            if ( diff1 > diff2){
                console.log("essaye encore, trop petit, tu t'approche");
            }
            else {
                console.log("essaye encore, trop petit, tu t'eloigne");
                }
            diff2 = diff1;
            }
    play = prompt("On rejoue?");       
    }
    else {
    bool = 1;
    console.log("bingo!!!");
    step + 1;
    }
}

}


