// var fiddleBtn = document.querySelector(".add")


// var addFiddle = function() {
//     var plant = document.createElement('div')
//     var plantText = document.createTextNode("Fiddle")
//     plant.appendChild(plantText);
//     document.body.appendChild(plant)
//     plant.classList.add('fiddle')
// }

// fiddleBtn.addEventListener("click", addFiddle)

var fiddleAdd = document.querySelector("saved-plants")
var fiddle = "fiddle"

localStorage.setItem("fiddle", fiddle)

if (localStorage = fiddle) {
    fiddleAdd.innerHTML = "fiddle"
}


