// main.js
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
// this is where we would do whatever we needed to do with the resulting data.
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }
  function compare(a,b){
      if(a.name>b.name){return 1}
      else if(a.name<b.name){return -1}
      else return 0;
  }
  function sortPokemon(pokeList) {
    let sortedList = pokeList.sort(compare);
    return sortedList;}

  function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    let pokeList = data.results;
    pokeList = sortPokemon(pokeList);
    console.log(pokeList)
    pokeList.forEach((currentItem) => {
      const html = `<li>${currentItem.name}</li>`;
      // note the += here...
      pokeListElement.innerHTML += html;
    });
  }
//   function sortPokemon(list) {}
// read this as: make a request to URL, WHEN it finishes THEN run convertToJson
// WHEN it finishes THEN run doStuff9
fetch(url).then(convertToJson).then(doStuffList);
// meanwhile...continue with the rest of the program...
console.log("second: ", results);