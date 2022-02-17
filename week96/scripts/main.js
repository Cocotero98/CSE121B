// Defining variables and getting elements
//Date
const date= new Date()
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const currentDate=`${year}/${month}/${day}`
document.getElementById('year').innerHTML=year
document.getElementById('day').innerHTML=currentDate;
//Buttons
let button=document.getElementById('btn')
let show=document.getElementById('show')
//Message to be displayed
document.getElementById('img').innerHTML=`<h3 id='message'>Workout like Machoke, eat like Snorlax, study like MewTwo, Sleep like Jigglypuff</h3>`
//URLs to be used in fetch
const snorlax='https://pokeapi.co/api/v2/pokemon/snorlax'
const jigglypuff='https://pokeapi.co/api/v2/pokemon/jigglypuff'
const mewtwo='https://pokeapi.co/api/v2/pokemon/mewtwo'
const machoke='https://pokeapi.co/api/v2/pokemon/machoke'





//Define functions
let store= function(){
  /**Stores information submited in localStorage */
  let newInfo=document.querySelector('#input')
  if (activity.value!='Select'){  
    if (newInfo.value!=''){
    let value=newInfo.value
    newInfo.value=''
    localStorage.setItem(`${currentDate} - ${activity.value}`,value);
    console.log('good')
    console.log(newInfo.value)
    input.focus()
  }else{newInfo.setAttribute('placeholder','Write something to submit')}
}else{newInfo.value=''; input.focus()}
}

let showMe= function(){
  /**Shows localStorage Elements*/
  let ammount= localStorage.length;
  const ul=document.getElementById('list')
  ul.innerHTML=''
  for (let i=0;i<ammount;i++){
    const key=localStorage.key(i);
    const value=localStorage.getItem(key);
    ul.innerHTML+=`<li>${key}   -   ${value}`
  } 
}
function addImg(data){
  /**Adds and image */
  let pokemonImg=document.getElementById('img')
  results=data
  pokemonImg.innerHTML+= `<img src=${results.sprites.front_default} alt=${results.name}>`
}
function chooseActivity(){
  /**Changes message according to activity */
if (activity.value==='Workout'){
  document.getElementById('message').innerText='Workout like Machoke!'
}
else if (activity.value==='Sleep'){
  document.getElementById('message').innerText='Sleep like Jigglypuff'
}
else if (activity.value==='Food'){
  document.getElementById('message').innerText='Eat like Snorlax'
}
else if (activity.value==='Study'){
  document.getElementById('message').innerText='Study like MewTwo'
}
else{
  document.getElementById('message').innerText='Workout like Machoke, eat like Snorlax, study like MewTwo, Sleep like Jigglypuff'
}
}





//fetch and .then
let url=''

  fetch(machoke)
  .then((response)=>{return response.json()})
  .then(addImg)

  fetch(jigglypuff)
  .then((response)=>{return response.json()})
  .then(addImg)

  fetch(snorlax)
  .then((response)=>{return response.json()})
  .then(addImg)

  fetch(mewtwo)
  .then((response)=>{return response.json()})
  .then(addImg)


  

//EventListeners
button.addEventListener('click',store)
show.addEventListener('click', showMe)
document.querySelector('#activity').addEventListener('change', chooseActivity)

