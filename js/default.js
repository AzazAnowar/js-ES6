/* 
function add(num1, num2){
    // if(num2 === undefined){
    //     num2 = 0;
    // }

    num2 = num2 || 0;

    const total = num1 + num2;
    return total;
}
*/

// const result = add(10,20);
// console.log(result);
// const result = add(10);
// console.log(result);

function add(first = 0, second = 0){
    const total = first + second;
    return total;
}

// const result = add(10,20);
// const result = add(10);
const result = add();
console.log(result);

function fullName(firstName, middleName = '', lastName = ''){
    const fullName = firstName + ' ' + middleName +' '+lastName;
    return fullName;
}

const name1 = fullName('Azaz','Anowar');
const name2 = fullName('Azaz', 'Anowar', 'Real');
const name3 = fullName('Azaz');
console.log(name1, name2, name3);