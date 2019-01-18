nombreConvertToHexa = prompt("nombre decimal à convertir en hexa");

function converTToHexa(value){
	baseHexa= [ '0' ,'1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
	modulo = 0;
	hexa =[];
	
	while( value > 0){
		modulo = (value % 16);
		value = ~~(value/16);
		hexa.push(baseHexa[modulo]);
	}
	if(value<=1){
		hexa.push(baseHexa[value]);
	}

	console.log("big endian : 0x" + hexa.join(""));
    console.log("little endian : 0x " + hexa.reverse().join(""));
    
    convertPrefix(hexa);
    
}

converTToHexa(nombreConvertToHexa);

function convertPrefix(hexa){

    let couple =[];
	let j= 0;
	for(i=hexa.length-1;i>=0;i--){
		if(couple[j]==undefined){
			couple[j]=""
		}
		if(couple[j].length==2){
			j++;
			couple[j]="";
		}
		couple[j]=couple[j]+hexa[i];
		
    }

    if(couple[j].length==1 && nombreConvertToHexa < 253){
        console.log("big endian en couple plus prefix : 0x " + couple.join(" "));
    }
    else if(couple[j].length==1 && nombreConvertToHexa >= 253){
        console.log("big endian en couple plus prefix : 0xfd " + couple.join(" "));
    }
    else if(couple[j].length==2){
        console.log("big endian en couple plus prefix : 0xfd " + couple.join(" "));
    }
    else if(couple[j].length==3){
        console.log("big endian en couple plus prefix : 0xfe " + couple.join(" ") + " 00");
    }
    else if(couple[j].length==4){
        console.log("big endian en couple plus prefix : 0xfe " + couple.join(" "));
    }
    else if(couple[j].length==5){
        console.log("big endian en couple plus prefix : 0xff " + couple.join(" ") + " 00 00 00");
    }
    else if(couple[j].length==6){
        console.log("big endian en couple plus prefix : 0xff " + couple.join(" ") + " 00 00");
    }
    else if(couple[j].length==7){
        console.log("big endian en couple plus prefix : 0xff " + couple.join(" ") + " 00");
    }
    else if(couple[j].length==8){
        console.log("big endian en couple plus prefix : 0xff " + couple.join(" "));
    }
    else{
    console.log("entree non conforme");
    }

}