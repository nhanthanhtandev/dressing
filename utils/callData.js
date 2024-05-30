
 function fetchJSONData() {
    let data= [];    
    fetch("../data/Data.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((res) => {
            data=JSON.parse(JSON.stringify(res));
            renderProducts(data);
            return data;
            // if(localStorage.getItem('CARTITEM')){
            //     cart = JSON.parse(localStorage.getItem('CARTITEM'));
            //     console.log(cart);
            // }
            
        }
        )
        .catch((error) => 
               console.error("Unable to fetch data:", error));
    
}


fetchJSONData();
var showName = [];
var tabPanes = [];
var tabContent = [];
var clothesType =[];
var clothesType1 =[];

function renderProducts(productArr){
    let dataNavPills = [];
    let dataTabPanes = [];
    let newData = [];
    dataNavPills = productArr.navPills;
    dataTabPanes =  productArr.tabPanes;
    // console.log(dataTabPanes);
    newData.push(dataTabPanes);
    

    // let newdataTabPanes =  dataTabPanes.map(obj => JSON.stringify(obj)).join("");
    let contentHTML = "";
    let contentHTML1 = "";
    for(let i = 0 ; i < dataNavPills.length ; i++){
        listChosen = dataNavPills[i].showName;
        tabContent = dataNavPills[i].tabName;
        clothesType = dataNavPills[i].type;
        let divString = `
        <li class="nav-item" role="presentation">
        <button
          class="nav-link w-100"
          id="profile-tab"
          data-bs-toggle="tab"
          data-bs-target="${tabContent}"
          data-clothes-type="${clothesType}"
          type="button"
          role="tab"
          onclick="listItemShow(this)"
          aria-controls="quan"
          aria-selected="false"
        >
          ${listChosen}
        </button>
      </li>`;
      contentHTML += divString;
    }
    document.getElementById("pills-tab").innerHTML  = contentHTML;
    
    for(let j = 0 ; j < dataNavPills.length ; j++){
        tabContent1 = dataNavPills[j].tabName;
        clothesType1 = dataNavPills[j].type;
        let divString1 = `
        <div class="tab-pane a row" id="${tabContent1}" data-type-navpill='${clothesType1}' role="tabpanel"></div>`;
        contentHTML1 += divString1;
    }
    document.getElementById("tab-content1").innerHTML  = contentHTML1;
    
    // Lấy phần tử button
    var button = document.querySelectorAll(".nav-link");
    
    // Gắn sự kiện onclick và truyền mảng vào hàm listItemShow
    button.forEach(function(button) {
        button.onclick = function() {
            listItemShow(this, newData);
        };
    });
   
}