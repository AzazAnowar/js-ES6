const numbers = [1,2,3,4,5];
// .reduce (accumulator function, inital value)
// accumulator function use two parameters

const total = numbers.reduce((previous, currnet)=>{
    console.log(previous,currnet);
    return previous + currnet; 
}, 0);
console.log(total);