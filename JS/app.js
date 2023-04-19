let age = 32;
let userName = 'Abdullah';
let hobbies = ['Sports', 'Games', 'Coding'];
let job = {
    tittle: 'Developer',
    Place: 'KSA',
    salary: '20000'
};


let totalAdultYears;

function calculateAdultYears(userAge){
    let result;
    result = userAge - 18;
    return result;
}

totalAdultYears = calculateAdultYears(age);
console.log(totalAdultYears);

age = 45;
totalAdultYears = calculateAdultYears(age);

console.log(totalAdultYears);

// alert(age);
// alert(userName);
// alert(hobbies[1]);
// alert(job.tittle);