const numbers = [12, 5, 15, 23, 45, 11, 18, 9, 55, 61, 1];
const bigNumbers = numbers.filter(number => number > 20);
const tiny = numbers.filter(num => num < 10);
const even = numbers.filter(n => n % 2 === 0);
const odd = numbers.filter(n => n %2 !==0);

const products = [
    {id:1, name: 'laptop', price: 45000},
    {id:1, name: 'mobile', price: 85000},
    {id:1, name: 'watch', price: 35000},
    {id:1, name: 'tablet', price: 45000},
];

const expensive = products.filter(product => product.price > 1000);
console.log(expensive);