const product = {
    name : 'IPhone',
    price : 799,
    description : 'A smartphone by Apple'
}

const newPrice = product.price + 100;
const phoneName = `this is ${product.name}`;

// const products = {name: "Iphone", Price: 799, brand: "Apple"};
const {name,price: p} = {name: "Iphone", price: 799, brand: "Apple"};

console.log(p)
// console.log(price)

const [first,second] = [10,20];

console.log(first)
console.log(second)