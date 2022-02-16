// date
const date= new Date()
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const currentDate=`${year}/${month}/${day}`

document.getElementById('day').innerHTML=currentDate;
// toggle menu to open a list in html (Workout, Sleep, Food, Study). Similar to the temple ascending/descending

//add a space to insert the date (key), add a space to insert what you did (value)

//Add a button to display the stored information

//



































const url = "https://pokeapi.co/api/v2/pokemon";
let results = null;
// takes a fetch response and checks to make sure it was OK.
// then returns the body of the response as a PROMISE to some JSON.
function convertToJson(response) {
  if (response.ok) {
    return response.json();
  } else {
    console.log("error:", response);
  }
}
function doStuff(data){
    results=data
    console.log('first',results)
}

fetch(url).then(convertToJson).then(doStuff)