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

    var myTableArray = [];
    myTableArray.push(td1.innerHTML)
    myTableArray.push(td2.innerHTML)
    var banding_GD = hahaha.some(row => row.includes(td1.innerHTML))
    if(banding_GD == false){
        hahaha.push(myTableArray)
        table.children[0].appendChild(row); 
    }else{
        alert('ID SUDAH ADA')
    }

    document.getElementById(a).value = ''
    document.getElementById(b).value = ''
}

var ambil_array = []
function ambil(a,b,c){
    "use strict";

    var table = document.getElementById("table_ambil");
    var table_gd = document.getElementById("table");
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
        var banding_barang = ambil_array.some(row => row.includes(td2.innerHTML))
        if((banding_ambil == true) && (banding_barang == false)){
            for(var i=1; i < table_gd.rows.length; i++){
                if(td1.innerHTML == table_gd.rows[i].cells[0].innerHTML){
                    if(table_gd.rows[i].cells[1].innerHTML - td3.innerHTML > 0){
                        ambil_array.push(simpan_sementara)
                        table.children[0].appendChild(row);
                        table_gd.rows[i].cells[1].innerHTML = table_gd.rows[i].cells[1].innerHTML - td3.innerHTML
                    }else{
                        alert('STOK FULL')
                    }
                        
                };
            }
        }else if(banding_ambil == false){
            for(var i=1; i < table_gd.rows.length; i++){
                if(td1.innerHTML == table_gd.rows[i].cells[0].innerHTML){
                    if(table_gd.rows[i].cells[1].innerHTML - td3.innerHTML > 0){
                        ambil_array.push(simpan_sementara)
                        table.children[0].appendChild(row);
                        table_gd.rows[i].cells[1].innerHTML = table_gd.rows[i].cells[1].innerHTML - td3.innerHTML
                    }else{
                        alert('STOK FULL')
                    }
                        
                };
            }
        }else if(banding_ambil == true){
            alert('ID GUDANG/BARANG SAMA')
        }
    }else{
        alert('ID GUDANG TIDAK ADA')
    }
    document.getElementById(a).value = ''
    document.getElementById(b).value = ''
    document.getElementById(c).value = ''
}

function getBarang(a,b,c){
    "use strict";
    var table = document.getElementById("table_get");
    var table_gd = document.getElementById("table");
    var table_ambil = document.getElementById('table_ambil')
    var row= document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");

    td1.innerHTML = document.getElementById(a).value;
    td2.innerHTML  = document.getElementById(b).value;
    td3.innerHTML  = document.getElementById(c).value;

    var bandingkeun = hahaha.some(row => row.includes(td1.innerHTML))
    if(bandingkeun == true){
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);

        var banding_id = ambil_array.some(row => row.includes(td1.innerHTML))
        var banding_barang = ambil_array.some(row => row.includes(td2.innerHTML))

        if((banding_id == true) && (banding_barang == true)){
            for(var j=1; j < table_gd.rows.length; j++){
                for(var i=1; i < table_ambil.rows.length; i++){
                    if(table_ambil.rows[i].cells[2].innerHTML - td3.innerHTML > 0){
                        table.children[0].appendChild(row);
                        table_ambil.rows[i].cells[2].innerHTML = table_ambil.rows[i].cells[2].innerHTML - td3.innerHTML
                        table_gd.rows[j].cells[1].innerHTML = parseInt(table_gd.rows[j].cells[1].innerHTML) + parseInt(td3.innerHTML)

                    }else{
                        alert('STOK HABIS')
                    }
                }
            }
        }else if((banding_id == true) && (banding_barang == false)){
            alert('Barang tidak ada')
        }
        
    }else{
        alert('ID GUDANG TIDAK ADA')
    }

    document.getElementById(a).value = ''
    document.getElementById(b).value = ''
    document.getElementById(c).value = ''
}