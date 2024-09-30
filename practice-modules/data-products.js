export function getProduct(productId) {
    let matchingProduct;

    products.forEach((product) => {
    if (product.id === productId) {
    matchingProduct = product;
    }
    });
    return matchingProduct;
}

export function formatCurrency(priceCents) {
    return (Math.round(priceCents) / 100).toFixed(2);
    }



export const products = [
    {
        id: "1",
        image: "images/T-Shirt.png",
        name: "T-shirt",
        priceCents: 1500
    },
{
    id: "2",
    image: "images/Jeans.png", 
    name: "Jeans",
    priceCents: 3000
},
{
    id: "3",
    image: "images/Socks.png",
    name: "Socks",
    priceCents: 4500
},
{
    id: "4",
    image: "images/red-pajamas.png",
    name: "Red Pajamas",
    priceCents: 1999
},
{
    id: "5",
    image: "images/shoes.png",
    name: "Running Shoes",
    priceCents: 3499
},
{
id: "6",
image: "images/toaster-oven.png",
name: "Toaster Oven",
priceCents: 4999
}

];





