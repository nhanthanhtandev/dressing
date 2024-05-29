

function listItemShow(clothes,dataPanes){  
   let clothesType = clothes.getAttribute("data-clothes-type");
   var decodedString = decodeURIComponent(dataPanes);
   var arr = decodedString.split(",");
   for(var i = 0 ; i < arr.length;i++){
      console.log(arr[i].id);
   }
}

