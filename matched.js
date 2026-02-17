const products = [
    {id: 1, name: 'Walton', price: 19000},
    {id: 2, name: 'Xiaomi', price: 19000},
    {id: 3, name: 'Iphone', price: 19000},
    {id: 4, name: 'Macbook', price: 19000},
    {id: 5, name: 'Samsung Phone', price: 19000},
    {id: 6, name: 'Lenovo', price: 19000},
    {id: 7, name: 'Pixel', price: 19000},
    {id: 8, name: 'HP', price: 19000},
];

function matchedProducts(products,search)
{
    const matched = [];
    for(const product of products)
    {
        if(product.name.toLowerCase().includes(search.toLowerCase()))
        {
            matched.push(product);  
        }
    }
    return matched;
}

const result = matchedProducts(products,'phone');
console.log(result);