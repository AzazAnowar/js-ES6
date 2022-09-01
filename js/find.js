const numbers = [12, 5, 15, 23, 45, 11, 18, 9, 55, 61, 1];

// it will give only the first element
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:1, name: 'mobile', price: 85000},
    {id:1, name: 'watch', price: 30000},
    {id:1, name: 'tablet', price: 23000},
];

const cheap = products.find(product => product.price < 40000);
console.log(cheap);