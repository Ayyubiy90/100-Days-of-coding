let courseName = 'Python complete guide';
let coursePrice = 4000;
let courseGoals = ['Learn python', 'become a python genius', 'python genius'];

// alert(courseName);
// alert(coursePrice);
// alert(courseGoals);


let onlineCourse = {
    name: 'Python complete guide',
    price: 4000,
    goals : ['Learn python', 'become a python genius', 'python genius'],
}

alert(onlineCourse.name);
alert(onlineCourse.price);
alert(onlineCourse.goals);

alert(onlineCourse.goals[2]);

function getListItem(goat, goatSheep){
    let goatElement = goat[goatSheep];
    return goatElement;
}

let firstGoal = getListItem(onlineCourse.goals, 0);
alert(firstGoal);

