let ourForm = document.getElementById("ourForm")
let ourField = document.getElementById("ourField")
let ourList = document.getElementById("ourList")

ourForm.addEventListener("submit",(e)=>{
  e.preventDefault() // neleidzhia siusti duomenu i serveri
  createItem(ourField.value)
})

function createItem(x){
 
 let ourHTML = `<li class="w-96 mt-5"> ${x} <button onclick="deleteItem(this)" class="pl-100 bg-gray-200 border-2 border-gray-600 float-right mr-5" onclick="deleteItem()">Delete</button></li>`
 
 ourList.insertAdjacentHTML("beforeend",ourHTML)
 ourField.value = ""  //išvalo įvesties langelį
 ourField.focus()  // po submit mygtuko paspaudimo crusorius gryžta i langelį

}

function deleteItem(toDelete) {        //f-cija turinio trynimui

  
  toDelete.parentElement.remove()

  
}