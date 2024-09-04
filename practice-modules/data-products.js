export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
    if (product.id === productId) {
    matchingProduct = product;
    }
    });
    return matchingProduct;
}



export const products = [
    {
        id: "1",
        image: "images/T-Shirt.png",
        name: "T-shirt",
        price: 1500
    },
{
    id: "2",
    image: "images/Jeans.png", 
    name: "Jeans",
    price: 3000
},
{
    id: "3",
    image: "images/Socks.png",
    name: "Socks",
    price: 4500
}

];





