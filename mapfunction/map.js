let numbers=["one","two","three"];
let newarray=numbers.map(function newstring(string){
  return `<li>${string}</li>`
})

document.getElementById("myList").innerHTML=newarray.join()