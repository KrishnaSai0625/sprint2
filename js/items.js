// Initialize a new TaskManager with currentId set to 0
const itemsController = new ItemsController(0);


function addItemCard(item){
    const itemHTML = '<div class = "col-4 my-3" m>\n' +  
        '    <div class="card" style="width: 20rem;">\n' +
        '    <img src="'+item.img +'" width="300" height="250"  alt="product image">\n' +
        '    <div class="card-body">\n' +
        '        <h5 class="card-title">'+item.name+'</h5>\n' +
        '        <p class="card-text">'+item.description+'</p>\n' +
        '        <a href="#" class="btn btn-primary">Add</a>\n' +
        '    </div>\n' +
        '</div>\n' +
        '</div>\n' +
        '<br>'
    const itemsContainer = document.getElementById("list-items");
    itemsContainer.innerHTML += itemHTML;
    //i++; // i = i+1;
    //i+=2; // i = i + 2;
    //str += s; // str = str + s;
    //innerHTML = innerHTML + itemHTML;
}

// function loadStorageSampleData(){
//     if(!localStorage.getItem("tyreProducts")){
//         const sampleItems = [{'name':'bikeTyre',
//         'img':'https://5.imimg.com/data5/SELLER/Default/2020/11/TK/MD/NG/19097250/sports-bike-tyre-1000x1000.jpg',
//         'description':'Sports Bike Tyre, Size: 180/50 Zr17'},
//         {'name':'carTyre',
//         'img':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrzuTGM6KNHQiHr2I-q-ZPI7MdiEXehBH0HBR-oFAkpMJYxCO4CCKACBnkXdzhoEzEk0o&usqp=CAU',
//         'description':'sports bike tyres'}];
//         localStorage.setItem("tyreProducts", JSON.stringify(sampleItems));
//     }
// }

function loadCardsListFromItemsController(){
    console.log('start');
    for(var i = 0, size = itemsController.tyreProducts.length; i < size ; i++){
        const item = itemsController.tyreProducts[i];
        addItemCard(item);
    }
}

//loadStorageSampleData();
itemsController.loadItemsFromLocalStorage();
loadCardsListFromItemsController();
