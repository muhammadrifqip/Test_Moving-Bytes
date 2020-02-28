const fs = require('fs')

const txtToJson = require("txt-file-to-json");

function initialize(blacklist){
    const dataInJSON = txtToJson({ filePath: blacklist });
    var conv_string = JSON.stringify(dataInJSON)
    var columns = ['NAMA','NOMOR'];
    
    var result = JSON.parse(conv_string).map(function(obj) {
      return columns.map(function(key) {
        return obj[key];
      });
    });
    // console.log(lenght(result));
    return result
    
}
var blcklst = initialize('blacklist.txt')


function check_blacklist(name, phone_number){
    var i = 0
    while (i < blcklst.length){
        if(blcklst[i][0]==name && blcklst[i][1]==phone_number){
            console.log('BLACKLIST untuk nama :',blcklst[i][0]);
            console.log('Dengan No HP :',blcklst[i][1]);
        }else if(blcklst[i][1]==phone_number){
            console.log('NO HANDPHONE :',blcklst[i][1],' Merupakan Nomor Blacklist')
        }
        i+=1
    }
}

check_blacklist('Melis',1341441)
