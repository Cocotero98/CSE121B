// date
const date= new Date()
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const currentDate=`${year}/${month}/${day}`

document.getElementById('day').innerHTML=currentDate;

let store= function(){
  let newInfo=document.querySelector('#input')
  if (newInfo.value!=''){
    let value=newInfo.value
    newInfo.value=''
    localStorage.setItem(`${currentDate} - ${activity.value}`,value);
    console.log('good')
    console.log(newInfo.value)
    input.focus()
  }

}
let showMe= function(){
  let ammount= localStorage.length;
  const ul=document.getElementById('list')
  ul.innerHTML=''
  for (let i=0;i<ammount;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
    ul.innerHTML+=`<li>${key}   -   ${value}`
  } 
}

let button=document.getElementById('btn')
button.addEventListener('click',store)
let show=document.getElementById('show')
show.addEventListener('click', showMe)

// button.addEventListener('click', console.log('works'))
// toggle menu to open a list in html (Workout, Sleep, Food, Study). Similar to the temple ascending/descending

const snorlax='https://pokeapi.co/api/v2/pokemon/snorlax'
const jigglypuff='https://pokeapi.co/api/v2/pokemon/jigglypuff'
const mewtwo='https://pokeapi.co/api/v2/pokemon/mewtwo'
const machoke='https://pokeapi.co/api/v2/pokemon/machoke'


let url=''
switch(activity.value){
  case 'Workout':
    url=machoke;
    break;
  case 'Sleep':
    url=jigglypuff;
    break;
    case 'Food':
    url=snorlax;
    break;
  case 'Study':
    url=mewtwo;
    break;
}
function addImg(data){
  const pokemonImg=document.getElementById('img')
  results=data
  dreamWorld=results.dream_world
  // console.log("first: ", results.sprites.front_default);
  let img= document.createElement('img')
  img.setAttribute('src',results.sprites.front_default)
  img.setAttribute('alt',results.name)
  pokemonImg.appendChild(img)
}

fetch(url)
.then((response)=>{return response.json()})
.then(addImg)

//add a space to insert the date (key), add a space to insert what you did (value)

//Add a button to display the stored information

//



































// const url = "https://pokeapi.co/api/v2/pokemon";
// let results = null;
// // takes a fetch response and checks to make sure it was OK.
// // then returns the body of the response as a PROMISE to some JSON.
// function convertToJson(response) {
//   if (response.ok) {
//     return response.json();
//   } else {
//     console.log("error:", response);
//   }
// }
// function doStuff(data){
//     results=data
//     console.log('first',results)
// }

// fetch(url).then(convertToJson).then(doStuff)