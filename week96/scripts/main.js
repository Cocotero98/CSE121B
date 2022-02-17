// date
const date= new Date()
const year= date.getFullYear()
const month=date.getMonth()
const day=date.getDate()
const currentDate=`${year}/${month}/${day}`
document.getElementById('year').innerHTML=year
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


const snorlax='https://pokeapi.co/api/v2/pokemon/snorlax'
const jigglypuff='https://pokeapi.co/api/v2/pokemon/jigglypuff'
const mewtwo='https://pokeapi.co/api/v2/pokemon/mewtwo'
const machoke='https://pokeapi.co/api/v2/pokemon/machoke'


let url=''
document.getElementById('img').innerHTML=`<h3>Workout like Machoke, eat like Snorlax, study like MewTwo, Sleep like Jigglypuff</h3>`


  url=machoke
  fetch(url)
  .then((response)=>{return response.json()})
  .then(addImg)

    url=jigglypuff
    fetch(url)
.then((response)=>{return response.json()})
.then(addImg)

  url=snorlax
  fetch(url)
.then((response)=>{return response.json()})
.then(addImg)

  url=mewtwo
  fetch(url)
.then((response)=>{return response.json()})
.then(addImg)

function addImg(data){
  let pokemonImg=document.getElementById('img')
  results=data
  pokemonImg.innerHTML+= `<img src=${results.sprites.front_default} alt=${results.name}>`
}


