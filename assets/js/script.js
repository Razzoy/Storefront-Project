
//*GLOBALS*//
const myFeaturedElement = document.getElementById('featuredProducts');
const navElement = document.getElementById('navigation');

let myProducts = null;

//*PAGE LOAD*//

//Create function for receiving the database data.
getProductsData();
getCategoryData();

/*MODEL CODE---------------------------------------------------------------------------------------------------*/

//Create function for receiving the database data.
function getProductsData() {
    //Fetching the database.
    fetch('https://dummyjson.com/products?limit=100')

        //Convert the response to JSON format.
        .then(response => response.json())

        //Pass JSON to the productsDataReceived function.
        .then(json => receiveProductData(json));

}

function getCategoryData() {

    fetch('https://dummyjson.com/products/categories')

        .then(res => res.json())

        .then(json => receiveCategoryData(json));
}

/*CONTROLLER CODE--------------------------------------------------------------------------------------------*/


//Create function for picking three products for main page.
function receiveProductData(productData) {

    //Create a variable that becomes equal to all 30 products in the database.
    myProducts = productData.products;

    //Create a variable that becomes an empty array for adding the three products.
    let productList = [];

    //Push three randomly chosen products to the empty array out from the 30 available products.
    productList.push(myProducts[Math.floor(Math.random() * myProducts.length)], myProducts[19], myProducts[15]);

    //Math.floor(Math.random()*products.length) chooses a single product at random from the 30 products available, every time the page loads.

    //console log the result.
    // console.log(productList);

    createProductView(productList);

}


function receiveCategoryData(categoryData) {
    // console.log(categoryData);

    createNavBar(categoryData);
}


function navCallBack(myCategory) {

    if (myCategory == 'all') {
        createProductView(myProducts);
    } else {

        let mySelectedProducts = [];


        myProducts.forEach(product => {

            if (myCategory == product.category) {

                mySelectedProducts.push(product);

            }
        });

        createProductView(mySelectedProducts);
    }
}



/*VIEW CODE--------------------------------------------------------------------------------------------*/

function createNavBar(myCategories) {

    let myHTML = `<button onclick="navCallBack('all')">All</button>`;

    myCategories.forEach(element => {
        // console.log(element);
        myHTML += `<button onclick="navCallBack('${element}')">${element}</button>`;
    });

    navElement.innerHTML = myHTML;

}

function createProductView(myCards) {

    clearApp()

    myCards.forEach(product => {

        // console.log(product);

        let myHTML = `<figure onclick ="ProductCallback(${product.id})"><h2>${product.title}</h2> <img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`;

        myFeaturedElement.innerHTML += myHTML;
    });
}

function clearApp() {
    myFeaturedElement.innerHTML = '';
}








