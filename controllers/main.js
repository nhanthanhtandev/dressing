
let listChosenItem = new ListChosenItem();
function listItemShow(clothes,dataPanes){  
   let clothesType = clothes.getAttribute("data-clothes-type");
   // var decodedString = decodeURIComponent(dataPanes);
   // var arr = decodedString.split(",");
   // console.log(arr)
   
   let contentHTML = "";
   // console.log(clothesType);
   for(var i = 0 ; i < dataPanes.length;i++)
   {
      for(var j = 0 ; j <dataPanes[i].length;j++)
      {
         var newDataPanes = [];
         newDataPanes = (dataPanes[i][j]);
         
         if(newDataPanes.type == clothesType)
         {
            
            let tdContent = "";
            tdContent += `<div class="col-md-3">
            <div class="card text-center">
               <img
               src="${newDataPanes.imgSrc_jpg}"
               />
               <h4><b>${newDataPanes.name}</b></h4>
               <button data-id="${newDataPanes.id}" data-type="${newDataPanes.type}" data-name="${newDataPanes.name}" data-desc="${newDataPanes.desc}" data-imgsrcjpg="${newDataPanes.imgSrc_jpg}"  data-imgsrcpng="${newDataPanes.imgSrc_png}" class="changeStyle">Thử đồ</button>
               </div>
            </div>`

            contentHTML += tdContent;
         }
         document.querySelector(".well").innerHTML = contentHTML;
         let btnTryList = document.querySelectorAll(".changeStyle");
         console.log(btnTryList);
         btnTryList.forEach((btnTry, index) => {
            btnTry.addEventListener("click", function () {
              let id = btnTry.getAttribute("data-id");
              let type = btnTry.getAttribute("data-type");
              let name = btnTry.getAttribute("data-name");
              let desc = btnTry.getAttribute("data-desc");
              let imgsrcjpg = btnTry.getAttribute("data-imgsrcjpg");
              let imgsrcpng = btnTry.getAttribute("data-imgsrcpng");
              
              let chosenItem = new ChosenItem(id, type, name, desc, imgsrcjpg, imgsrcpng);
              if (listChosenItem.listArray) {
                let index = findIndex(chosenItem.type, listChosenItem.listArray);
                if (index !== -1) { //đã tồn tại type
                  listChosenItem.listArray[index] = chosenItem;
                } else {
                  listChosenItem.addChosenItem(chosenItem);
                }
              }
              renderItemForModel(listChosenItem.listArray);
            })
         });
      }
   }
}

const findIndex = (type, listChosenItem) => {
   let indexType = -1;
   listChosenItem.forEach((item, index) => {
     if (item.type === type) {
       indexType = index;
     }
   });
   return indexType;
 }

 
 

const renderItemForModel = (listChosen) => {
   if (listChosen.length > 0 && listChosen) {
     listChosen.forEach((item, index) => {
       if (item.type === "topclothes") {
         renderBikiniTop(item.imgsrc_png);
       }
       if (item.type === "botclothes") {
         renderBikiniBottom(item.imgsrc_png);
       }
       if (item.type === "shoes") {
         renderFeet(item.imgsrc_png);
       }
       if (item.type === "handbags") {
         renderHandbags(item.imgsrc_png);
       }
       if (item.type === "necklaces") {
         renderNecklace(item.imgsrc_png);
       }
       if (item.type === "hairstyle") {
         renderHairstyle(item.imgsrc_png);
       }
       if (item.type === "background") {
         renderBackground(item.imgsrc_png);
       }
     })
   }
 }


 const renderBikiniTop = (img) => {
   document.querySelector(".bikinitop").style.width = "500px";
   document.querySelector(".bikinitop").style.height = "500px";
   document.querySelector(".bikinitop").style.background = `url(${img})`;
   document.querySelector(".bikinitop").style.position = "absolute";
   document.querySelector(".bikinitop").style.top = "-9%";
   document.querySelector(".bikinitop").style.left = "-5%";
   document.querySelector(".bikinitop").style.zIndex = "3";
   document.querySelector(".bikinitop").style.transform = "scale(0.5)";
 };

 const renderBikiniBottom = (img) => {
   document.querySelector(".bikinibottom").style.width = "500px";
   document.querySelector(".bikinibottom").style.height = "1000px";
   document.querySelector(".bikinibottom").style.background = `url(${img})`;
   document.querySelector(".bikinibottom").style.position = "absolute";
   document.querySelector(".bikinibottom").style.top = "-30%";
   document.querySelector(".bikinibottom").style.left = "-5%";
   document.querySelector(".bikinibottom").style.zIndex = "2";
   document.querySelector(".bikinibottom").style.transform = "scale(0.5)";
 }
 
 const renderFeet = (img) => {
   document.querySelector(".feet").style.width = "500px";
   document.querySelector(".feet").style.height = "1000px";
   document.querySelector(".feet").style.background = `url(${img})`;
   document.querySelector(".feet").style.position = "absolute";
   document.querySelector(".feet").style.top = "-37%";
   document.querySelector(".feet").style.right = "-3.5%";
   document.querySelector(".feet").style.zIndex = "1";
   document.querySelector(".feet").style.transform = "scale(0.5)";
 }
 const renderHandbags = (img) => {
   document.querySelector(".handbag").style.width = "500px";
   document.querySelector(".handbag").style.height = "1000px";
   document.querySelector(".handbag").style.background = `url(${img})`;
   document.querySelector(".handbag").style.position = "absolute";
   document.querySelector(".handbag").style.top = "-40%";
   document.querySelector(".handbag").style.right = "-3.5%";
   document.querySelector(".handbag").style.zIndex = "4";
   document.querySelector(".handbag").style.transform = "scale(0.5)";
 }
 
 const renderNecklace = (img) => {
   document.querySelector(".necklace").style.width = "500px";
   document.querySelector(".necklace").style.height = "1000px";
   document.querySelector(".necklace").style.background = `url(${img})`;
   document.querySelector(".necklace").style.position = "absolute";
   document.querySelector(".necklace").style.top = "-35%";
   document.querySelector(".necklace").style.right = "-3.5%";
   document.querySelector(".necklace").style.zIndex = "4";
   document.querySelector(".necklace").style.transform = "scale(0.5)";
 }
 const renderHairstyle = (img) => {
   document.querySelector(".hairstyle").style.width = "1000px";
   document.querySelector(".hairstyle").style.height = "1000px";
   document.querySelector(".hairstyle").style.background = `url(${img})`;
   document.querySelector(".hairstyle").style.position = "absolute";
   document.querySelector(".hairstyle").style.top = "-75%";
   document.querySelector(".hairstyle").style.right = "-57%";
   document.querySelector(".hairstyle").style.zIndex = "4";
   document.querySelector(".hairstyle").style.transform = "scale(0.15)";
 }
 const renderBackground = (img) => {
   document.querySelector(".background").style.backgroundImage = `url(${img})`
 };
