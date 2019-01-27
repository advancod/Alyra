const CIBLE_MAX = 2.7 * Math.pow(10,67);
const convert = {
  bin2dec : s => parseInt(s, 2).toString(10),
  bin2hex : s => parseInt(s, 2).toString(16),
  dec2bin : s => parseInt(s, 10).toString(2),
  hex2bin : s => parseInt(s, 16).toString(2),
}

const MIN_DATA_OPCODE = 1;
const MAX_DATA_OPCODE = 75;
const OPCODES = [
  ['0x00','OP_0'],
  ['0x4c','OP_PUSHDATA1'],
  ['0x4d','OP_PUSHDATA2'],
  ['0x4e','OP_PUSHDATA4'],
  ['0x4f','OP_1NEGATE'],
  ['0x50','OP_RESERVED'],
  ['0x51','OP_1'],
  ['0x52','OP_2'],
  ['0x53','OP_3'],
  ['0x54','OP_4'],
  ['0x55','OP_5'],
  ['0x56','OP_6'],
  ['0x57','OP_7'],
  ['0x58','OP_8'],
  ['0x59','OP_9'],
  ['0x5a','OP_10'],
  ['0x5b','OP_11'],
  ['0x5c','OP_12'],
  ['0x5d','OP_13'],
  ['0x5e','OP_14'],
  ['0x5f','OP_15'],
  ['0x60','OP_16'],
  ['0x61','OP_NOP'],
  ['0x62','OP_VER'],
  ['0x63','OP_IF'],
  ['0x64','OP_NOTIF'],
  ['0x65','OP_VERIF'],
  ['0x66','OP_VERNOTIF'],
  ['0x67','OP_ELSE'],
  ['0x68','OP_ENDIF'],
  ['0x69','OP_VERIFY'],
  ['0x6a','OP_RETURN'],
  ['0x6b','OP_TOALTSTACK'],
  ['0x6c','OP_FROMALTSTACK'],
  ['0x6d','OP_2DROP'],
  ['0x6e','OP_2DUP'],
  ['0x6f','OP_3DUP'],
  ['0x70','OP_2OVER'],
  ['0x71','OP_2ROT'],
  ['0x72','OP_2SWAP'],
  ['0x73','OP_IFDUP'],
  ['0x74','OP_DEPTH'],
  ['0x75','OP_DROP'],
  ['0x76','OP_DUP'],
  ['0x77','OP_NIP'],
  ['0x78','OP_OVER'],
  ['0x79','OP_PICK'],
  ['0x7a','OP_ROLL'],
  ['0x7b','OP_ROT'],
  ['0x7c','OP_SWAP'],
  ['0x7d','OP_TUCK'],
  ['0x7e','OP_CAT'],
  ['0x7f','OP_SUBSTR'],
  ['0x80','OP_LEFT'],
  ['0x81','OP_RIGHT'],
  ['0x82','OP_SIZE'],
  ['0x83','OP_INVERT'],
  ['0x84','OP_AND'],
  ['0x85','OP_OR'],
  ['0x86','OP_XOR'],
  ['0x87','OP_EQUAL'],
  ['0x88','OP_EQUALVERIFY'],
  ['0x89','OP_RESERVED1'],
  ['0x8a','OP_RESERVED2'],
  ['0x8b','OP_1ADD'],
  ['0x8c','OP_1SUB'],
  ['0x8d','OP_2MUL'],
  ['0x8e','OP_2DIV'],
  ['0x8f','OP_NEGATE'],
  ['0x90','OP_ABS'],
  ['0x91','OP_NOT'],,
  ['0x92','OP_0NOTEQUAL'],
  ['0x93','OP_ADD'],
  ['0x93','OP_ADD'],
  ['0x94','OP_SUB'],
  ['0x95','OP_MUL'],
  ['0x96','OP_DIV'],
  ['0x97','OP_MOD'],
  ['0x98','OP_LSHIFT'],
  ['0x99','OP_RSHIFT'],
  ['0x9a','OP_BOOLAND'],
  ['0x9b','OP_BOOLOR'],
  ['0x9c','OP_NUMEQUAL'],
  ['0x9d','OP_NUMEQUALVERIFY'],
  ['0x9e','OP_NUMNOTEQUAL'],
  ['0x9f','OP_LESSTHAN'],
  ['0xa0','OP_GREATERTHAN'],
  ['0xa1','OP_LESSTHANOREQUAL'],
  ['0xa2','OP_GREATERTHANOREQUAL'],
  ['0xa3','OP_MIN'],
  ['0xa4','OP_MAX'],
  ['0xa5','OP_WITHIN'],
  ['0xa6','OP_RIPEMD160'],
  ['0xa7','OP_SHA1'],
  ['0xa8','OP_SHA256'],
  ['0xa9','OP_HASH160'],
  ['0xaa','OP_HASH256'],
  ['0xab','OP_CODESEPARATOR'],
  ['0xac','OP_CHECKSIG'],
  ['0xad','OP_CHECKSIGVERIFY'],
  ['0xae','OP_CHECKMULTISIG'],
  ['0xaf','OP_CHECKMULTISIGVERIFY'],
  ['0xb0','OP_NOP1'],
  ['0xb1','OP_CHECKLOCKTIMEVERIFY'],
  ['0xb2','OP_CHECKSEQUENCEVERIFY'],
  ['0xb3','OP_NOP4'],
  ['0xb4','OP_NOP5'],
  ['0xb5','OP_NOP6'],
  ['0xb6','OP_NOP7'],
  ['0xb7','OP_NOP8'],
  ['0xb8','OP_NOP9'],
  ['0xb9','OP_NOP10'],
  ['0xff','OP_INVALIDOPCODE']
]

function getBlockVersion(object){
  return parseInt(LittleEndianToHex(object.substring(0,7)));
}

function getPreviousBlockHash(object){
return "0x" + LittleEndianToHex(object.substring(8,72),'');
}

function getMerkleRootHash(object){
return "0x" + LittleEndianToHex(object.substring(72,136),'');
}

function getBlockNonce(object){
  return "0x" + HexToDecimal((object.substring(151,159)))
}

function convertBinayToDecimal(value){
  return convert.bin2dec(value);
}

function convertBinaryToHexa(value){
  return convert.bin2hex(value);
}

function convertDecimalToBinary(value){
  return convert.dec2bin(value);
}

function convertHexadecimalToBinary(value){
  return convert.hex2bin(value);
}

function convertDecimalToHexa(value){
    hexa = value.toString(16);
   	if(value.length % 2 == 1){
   	  hexa = "0" + hexa;
   	}
}

function convertHexaToDecimal(value){
    return parseInt(value, 16);
}

function convertLittleEndianToBigEndian(value){
  if(value.length % 2 ==1){
      value='0'+value;
  }
  var retour = "";
  for(i=0;i<value.lenght+1;i+=2){
      retour = value[i] + value[i+1] + retour;
  }
  return retour;
}

function addVarIntToHexa(value){
    let couple =[];
  	let j= 0;
  	for(i=value.length-1;i>=0;i--){
        if(couple[j]==undefined){
  	    couple[j]=""
  	}
  		if(couple[j].length==2){
  			j++;
  			couple[j]="";
  		}
  		couple[j]=couple[j]+value[i];
      }
      if(couple[j].length==1 && nombreConvertToHexa < 253){
          return  "0x" + couple.join(" ");
      }
      else if(couple[j].length==1 && nombreConvertToHexa >= 253){
          return  "0xfd " + couple.join(" ");
      }
      else if(couple[j].length==2){
          return  "0xfd " + couple.join(" ");
      }
      else if(couple[j].length==3){
          return  "0xfe " + couple.join(" ") + " 00";
      }
      else if(couple[j].length==4){
          return  "0xfe " + couple.join(" ");
      }
      else if(couple[j].length==5){
          return  "0xff " + couple.join(" ") + " 00 00 00";
      }
      else if(couple[j].length==6){
          return  "0xff " + couple.join(" ") + " 00 00";
      }
      else if(couple[j].length==7){
          return  "0xff " + couple.join(" ") + " 00";
      }
      else if(couple[j].length==8){
          return  "0xff " + couple.join(" ");
      }
      else{
        return 0;
      }
   }

function calculerDifficulte(cible){
   return  CIBLE_MAX/cible;
}

function getRecompense(value){
   var RECOMPENSE = 50;
   hauteurBlock = Math.floor(value/210000);
   for(i=0;i<hauteurBlock;i++){
       RECOMPENSE = RECOMPENSE/hauteurBlock;
   }
   return RECOMPENSE;
}

function totalBitcoins(value){
   var BITCOINS = 0;
   var CURRENT_RECOMPENSE = 0;
   for(j=0;j<value;j++){
       CURRENT_RECOMPENSE = 50;
       hauteurBlock = Math.floor(value/210000);
       for(i=0;i<hauteurBlock;i++){
         CURRENT_RECOMPENSE = CURRENT_RECOMPENSE/hauteurBlock;
       }
       BITCOINS = BITCOINS + CURRENT_RECOMPENSE;
   }
   return BITCOINS;
 }

function LittleEndianToHex(value){
	return value.match(/../g).reverse().join('');
}

function VarIntToDecimal(value){
	var prefix=value.substring(0,2)
	var varint=value;
  var valTemp="";
	var sizeVarint=4;
	if(prefix=="0x"){
		varint=varint.substring(2);
	}
	var varIntVal=varint.substring(0,2);
	var valTemp="";
        if(varIntVal=="fd"){
  			valTemp=convertHexaToDecimal(LittleEndianToHex(varint.substring(2,6)));
  			sizeVarint=6;
        }
        else if(varIntVal=="fe"){
  			valTemp=convertHexaToDecimal(LittleEndianToHex(varint.substring(2,10)));
  			sizeVarint=10;
        }
  	    else if(varIntVal=="ff"){
  			valTemp=convertHexaToDecimal(LittleEndianToHex(varint.substring(2,18)));
  			sizeVarint=18;
        }
        else{
  			valTemp=convertHexaToDecimal(LittleEndianToHex(varint.substring(0,2)));
        }
  	return {'size':sizeVarint,'val':valTemp};
}

function getBlockVersion(object){
  return parseInt(LittleEndianToHex(object.substring(0,7)));
}

function getPreviousBlockHash(object){
return "0x" + LittleEndianToHex(object.substring(8,72),'');
}

function getMerkleRootHash(object){
return "0x" + LittleEndianToHex(object.substring(72,136),'');
}

function getBlockNonce(object){
  return "0x" + LittleEndianToHex((object.substring(151,159)))
}

function convertBinayToDecimal(value){
  return convert.bin2dec(value);
}

function convertBinaryToHexa(value){
  return convert.bin2hex(value);
}

function getBlocTransactions(objet){
	var varIntTemp=VarIntToDecimal(objet);
	var nb_transac=varIntTemp.val;
	var offsetVarint=varIntTemp.size;
	var transacTab= [];
	for(i=0;i<nb_transac;i++){
		transacTab.push(objet.substring(offsetVarint) + "        ");
	}
return transacTab;
}

function getTranscationVersion(object){
  return convertHexaToDecimal(LittleEndianToHex((object.substring(0,8))));
}

function getTranscationIns(object){
  var inputsList= [];
  var inputs = [
      ["txId : ", ""],
      ["vout : ", ""],
      ["scriptSig : ", ""],
      ["sequence : ", ""]
     ];
     for(i=0;i<object.lenght;i++){
   		inputs[0, 1] = LittleEndianToHex((object.substring(1)));
      inputs[1, 1] = LittleEndianToHex((object.substring(1)));
      inputs[2, 1] = LittleEndianToHex((object.substring(1)));
      inputs[3, 1] = LittleEndianToHex((object.substring(1)));
      inputsList.push(inputs);
   	}
    //return inputsList;
    return "non acheve"
}

function getTranscationOuts(object){
  var outputList= [];
  var outputs = [
      ["value : ", ""],
      ["scriptPubKey : ", ""],
     ];
     for(i=0;i<object.lenght;i++){
      outputs[0, 1] = LittleEndianToHex((object.substring(1)));
      outputs[1, 1] = LittleEndianToHex((object.substring(1)));
      outputList.push(outputs);
     }
     //return outputList;
     return "non acheve"
     }
