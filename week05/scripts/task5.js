/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const date=new Date()
// Step 2: Declare another variable to hold the day of the week
const day=''
// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
day= date.getDay()
// Step 4: Declare a variable to hold a message that will be displayed
const message=''
// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (day<=5){
    message='Hang in there!'
}
// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else{
    message='Woohoo!  It is the weekend!'
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
const secondMessage=''
// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (day){
    case 0:
        secondMessage='Sunday';
        break;
    case 1:
        secondMessage='Monday';
        break;
    case 2:
        secondMessage='Tuesday';
        break;
    case 3:
        secondMessage='Wendnesday';
        break;
    case 4:
        secondMessage='Thursday';
        break;
    case 5:
        secondMessage='Friday';
        break;
    case 6:
        secondMessage='Saturday';
        break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
const message1= document.querySelector('#message1')
// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
const message2= document.querySelector('#message2')

/* FETCH */
//function output(array){array.map(function (temple){}
// Step 1: Declare a global empty array variable to store a list of temples
templeList=[]
// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
let output=(temples)=>{temples.forEach(temple => {
    let article= document.createElement('article');
    const h3= document.createElement('h3');
    h3.innerHTML=temple.templeName;
    const firstH4= document.createElement('h4')
    firstH4.textContent = temple.location;
    const secondH4= document.createElement('h4');
    secondH4.textContent = temple.dedicated;
    const image= document.createElement('img');
    image.setAttribute('src', array.imageUrl)
    image.setAttribute('alt', templeName)
    article.appendChild(h3, firstH4, secondH4, image)
    const templeId= document.querySelector('#temples')
    templeId.appendChild(article)
});}
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
const url='https://byui-cse.github.io/cse121b-course/week05/temples.json'
fetch(url)
// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )
    .then(response=>response.json())
// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function
    .then(temples => {
        templeList = temples;
        output(templeList);
    });
// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
const reset= ()=>{document.querySelector('#temples').innerHTML=''}
// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
function sortBy(temple){
    reset();
    

}
// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function


/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
