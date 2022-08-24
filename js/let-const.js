// let --> let it to reassign
// const --> do not allow it to reassigh

let money = 25;
money = 35;
console.log(money);

const pakhi = 'jaan pakhi';
console.log(pakhi);
// pakhi = 'moyna pakhi';
const message = pakhi + ' potas potas';
console.log(message); 

const numbers = [1,2,3,4,5];
console.log(numbers);

// --> reassign is not allowded
// numbers = [6,7,8,9]
// console.log(numbers);

// push allowed
numbers.push(6,7,8,9);
console.log(numbers);

const student = {
    name: 'mofiz',
    address: 'Rongpur'
};
console.log(student);
// student ={ name: 'mofazzol}; can't do that
student.name = 'mofazzol'
console.log(student);


// for(const number of numbers)[
//     console.log(number)
// ]

let sum = 0;
for(let i = 0; i < numbers.length; i++){
    const number = numbers[i];
    console.log(number);
    sum = sum + number;
}
console.log(sum);