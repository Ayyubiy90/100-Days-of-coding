//"windows" & "document"
// document.body.children[1].children[0].href = 'https://google.com';

// console.dir(document);
// alert();
// window.alert();

let anchorElement = document.getElementById('external-link');
anchorElement.href = 'https://google.com';  //getElementById

anchorElement = document.querySelector('a');    //  a { color: red; }
anchorElement.href = 'https://google.com';  // querySelector; just like doing it in css, matches first element (single)

// Exercise Time!

let h1Element =  document.body.firstElementChild; 
h1Element =  document.body.children[0];

console.dir(h1Element);

// Task 2

console.dir(h1Element.parentElement);

// Task 3

console.dir(h1Element.nextElementSibling);

// Task 4 
h1Element = document.getElementById('first-tittle');
console.dir(h1Element);

//Task 5
let paragraph = document.querySelector('.paragraph');
console.dir(paragraph);


// Task 6
paragraph.textContent = 'This was changed by abdullah';

// ADD AN ELEMENT
// 1. Create the new element

let newAnchorElement = document.createElement('a');
newAnchorElement.href = 'https://www.google.com'
newAnchorElement.textContent = 'This leads to Google site'

// 2. Get access to the parent element that should hold new element

let firstParagraph = document.querySelector('p');


// 3. Insert the new element into the parents element content 

firstParagraph.append(newAnchorElement);

// HOW TO REMOVE ELEMENT
// 1. Select the element that should be removed 

let firstH1Element = document.querySelector('h1')

// 2. Remove it!

firstH1Element.remove()
firstH1Element.parentElement.removeChild(firstH1Element); // for older browser

//MOVE ELEMENT AROUND 

firstParagraph.parentElement.append(firstParagraph);

//innerHTML
// firstParagraph.innerHTML  // it gives you access to the inner of th html text

console.log(firstParagraph.textContent);

firstParagraph.innerHTML = 'Hi, This is <strong>Abdullah</strong>';  //Using javascript for html codes

// to add another text or adding a line break
firstParagraph.innerHTML = 'Hi, This is <strong>Abdullah</strong>' +
    'location'; // adding another text or line break 
