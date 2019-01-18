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

	console.log("big endian : 0x" + hexa.join());
	console.log("little endian : 0x " + hexa.reverse().join());
}

converTToHexa(nombreConvertToHexa);