const users = [
    {id: 1, name: 'abul', job: 'doctor'}
]

// console.log(users[0].name);

const data = {
    count: 500,
    data: [
        {id:1, name: 'Babul', job: 'doctor'},
        {id:2, name: 'Dabul', job: 'leader'}
    ]
}
// console.log(data);
// console.log(data.data[0].name);
const firstjob = data.data[0].job;
// console.log(firstjob);

const user = {
    id: 0001,
    name: 'Abul Babul Dabul',
    address: {
        street : {
            first: '35/A kochukhet lane',
            second: 'third floor',
            third: 'right side'
        },
        postOffice: 'Cantonment',
        city: 'Dhaka'
    }
}
// const userFloor = user.address.street.second;

// optional chaining
const userFloor = user.address.stret?.second;
console.log(userFloor);
