let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit",(e)=>{
  e.preventDefault() // neleidzhia siusti duomenu i serveri
  createItem(ourField.value)
})

function createItem(x){
 
 let ourHTML = `<li> ${x} <button class="bg-indigo-500">Delete</button></li>`
 
 ourList.insertAdjacentHTML("beforeend",ourHTML)
 
}