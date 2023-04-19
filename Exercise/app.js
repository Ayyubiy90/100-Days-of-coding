let paragraphElement = document.querySelector('p');

function changeParagraphText() {
    paragraphElement.textContent = 'Clicked!';
    console.log('Paragraph Clicked!');
}

paragraphElement.addEventListener('click', changeParagraphText);

// Listening to user input Events

let inputElement = document.querySelector('input');

function changeInputText(event) {    //inserting the 'object' into the parameters of the function
    // inputElement.textContent = 'input';
    let enteredText = inputElement.value;
    // let enteredText = event.target.value; => Alternative get access to our text here by using this code, it gives the full value that is stored in the word or sentence 
    // let enteredText = event.data; => This is different!, to get each data of the sentence or value
    console.log(enteredText);
    console.log(event);
}

inputElement.addEventListener('input', changeInputText);