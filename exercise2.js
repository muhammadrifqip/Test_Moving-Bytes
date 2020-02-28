var hahaha = []
function add(a,b){
    "use strict";

    var table = document.getElementById("table");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.innerHTML = document.getElementById(a).value;
    td2.innerHTML  = document.getElementById(b).value;


    row.appendChild(td1);
    row.appendChild(td2);

    
    // console.log(table.children[0].innerHTML)
    var myTableArray = [];
    myTableArray.push(td1.innerHTML)
    myTableArray.push(td2.innerHTML)
    var banding_GD = hahaha.some(row => row.includes(td1.innerHTML))
    if(banding_GD == false){
        hahaha.push(myTableArray)
        table.children[0].appendChild(row); 
        // alert(table.rows[1].cells.item(1).innerHTML)
    }else{
        alert('ID SUDAH ADA')
    }
}

var ambil_array = []
function ambil(a,b,c){
    "use strict";

    var table = document.getElementById("table_ambil");
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var simpan_sementara = []

    td1.innerHTML = document.getElementById(a).value;
    td2.innerHTML  = document.getElementById(b).value;
    td3.innerHTML  = document.getElementById(c).value;
    
    

    var bandingkeun = hahaha.some(row => row.includes(td1.innerHTML))
    if(bandingkeun == true){
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        simpan_sementara.push(td1.innerHTML)
        simpan_sementara.push(td2.innerHTML)
        simpan_sementara.push(td3.innerHTML)

        var banding_ambil = ambil_array.some(row => row.includes(td1.innerHTML))
        if(banding_ambil == false){
            ambil_array.push(simpan_sementara)
            table.children[0].appendChild(row);
        }else{
            alert('ID GUDANG SAMA')
        }
    }else{
        alert('ID GUDANG TIDAK ADA')
    }
     
}

