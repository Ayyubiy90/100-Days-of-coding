// const myName = 'Abdullah'

// if (myName === 'Abdullah') {
//     console.log('Hello');
// }

// let isLoggedIn = true;

// if (isLoggedIn === true) {
//     console.log('User is logged in!');
// }

for (let i = 0; i < 10; i++) {
    console.log(i);
}

const users = ['Khadija', 'Sumayah', 'Nusaybah'];

for (const user of users) {
    console.log(user);
}

const loggedInUser = {
    name: 'Sumayah',
    age: 6,
    isAdmin: true
}

for (const propertyName in loggedInUser) {
    console.log(propertyName);
    console.log(loggedInUser.name); 
}

let isFinished = false;

while (!isFinished) {
    isFinished = confirm('Do you want to quit?');
}

console.log('Done!');