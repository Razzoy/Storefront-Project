getProductsData();

//create function for receiving the database data
function getProductsData(){
    //fetching the database
    fetch('https://dummyjson.com/products')
    
    .then(response => response.json())
    .then(json => productsDataReceived(json));
}

function productsDataReceived(productData){

    let products = productData.products;

    let productList = [];

    productList.push(products[7], products[23], products[15]);

    console.log(productList);

}

getCatgoryData();

function getCatgoryData(){
    fetch('https://dummyjson.com/products/categories')
    .then(res => res.json())
    .then(console.log);
}