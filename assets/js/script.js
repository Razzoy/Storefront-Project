
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
    productList.push(products[7], products[23], products[15]);

    //console log the result.
    console.log(productList);

    getProductPrices(productList);

}

function getProductPrices(productCards){

    console.log('The three products prices:');
    productCards.forEach(product => {
        console.log(product.title);
        console.log(product.price);
        // console.log(product.thumpnail);
    });
}

getCatgoryData();

function getCatgoryData(){
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);
}