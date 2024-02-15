const myFeaturedElement = document.getElementById('featuredProducts');
getProductsData();

//Create function for receiving the database data.
function getProductsData(){
    //Fetching the database.
    fetch('https://dummyjson.com/products')

    //Convert the response to JSON format.
    .then(response => response.json())

    //Pass JSON to the productsDataReceived function.
    .then(json => productsDataReceived(json));
}

//Create function for picking three products for main page.
function productsDataReceived(productData){

    //Create a variable that becomes equal to all 30 products in the database.
    let products = productData.products;

    //Create a variable that becomes an empty array for adding the three products.
    let productList = [];

    //Push three randomly chosen products to the empty array out from the 30 available products.
    productList.push(products[Math.floor(Math.random()*products.length)], products[19], products[15]);

    //Math.floor(Math.random()*products.length) chooses a single product at random from the 30 products available, every time the page loads.

    //console log the result.
    console.log(productList);

    createProductView(productList);

}

function createProductView(myCards){

    myCards.forEach(product => {
        
        console.log(product);

        let myHTML = `<figure onclick ="ProductCallback(${product.id})"><h2>${product.title}</h2> <img src="${product.thumbnail}"><h3>PRIS: ${product.price} rabat: ${product.discountPercentage}</h3></figure>`;

        myFeaturedElement.innerHTML += myHTML;
    });
}




getCatgoryData();

function getCatgoryData(){
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);
}