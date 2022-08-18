// Fiddle plant//
var fiddleBtn = document.querySelector(".fid-add")
var fiddle = "fiddle"

var addFiddle = function() {
localStorage.setItem("fiddle", fiddle)
}

if (fiddleBtn) {
fiddleBtn.addEventListener("click", addFiddle)
}

for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == fiddle) {
        var fiddleAdd = document.querySelector(".saved-plants")
        var fiddleText = document.createElement('a')
        fiddleText.href = "./plant-pages/fiddle.html"
        fiddleText.textContent = "Fiddle"
        fiddleText.classList.add("fiddle-style")
    
        fiddleAdd.appendChild(fiddleText)
    } 
}
// End Fiddle Plant//

// Monstera Plant//
var monsteraBtn = document.querySelector(".mon-add")
var monstera = "monstera"

var addMonstera = function() {
localStorage.setItem("monstera", monstera)
}

if (monsteraBtn) {
monsteraBtn.addEventListener("click", addMonstera)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == monstera) {
        var monsteraAdd = document.querySelector(".saved-plants")
        var monsteraText = document.createElement('a')
        monsteraText.href = "./plant-pages/monstera.html"
        monsteraText.textContent = "Monstera"
        monsteraText.classList.add("fiddle-style")
    
        monsteraAdd.appendChild(monsteraText)
    } 
}
// End Monstera Plant //

// Pathos Plant //
var pathosBtn = document.querySelector(".pat-add")
var pathos = "pathos"

var addPathos = function() {
localStorage.setItem("pathos", pathos)
}

if (pathosBtn) {
pathosBtn.addEventListener("click", addPathos)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == pathos) {
        var pathosAdd = document.querySelector(".saved-plants")
        var pathosText = document.createElement('a')
        pathosText.href = "./plant-pages/pathos.html"
        pathosText.textContent = "pathos"
        pathosText.classList.add("fiddle-style")
    
        pathosAdd.appendChild(pathosText)
    } 
}
// End Pathos Plant //

// Peace-lily Plant //
var peaceBtn = document.querySelector(".peace-add")
var peace = "peace"

var addPeace = function() {
localStorage.setItem("peace", peace)
}

if (peaceBtn) {
peaceBtn.addEventListener("click", addPeace)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == peace) {
        var peaceAdd = document.querySelector(".saved-plants")
        var peaceText = document.createElement('a')
        peaceText.href = "./plant-pages/peace-lily.html"
        peaceText.textContent = "Peace Lily"
        peaceText.classList.add("fiddle-style")
    
        peaceAdd.appendChild(peaceText)
    } 
}
// End Peace Lily Plant //

// Pilea plant //
var pileaBtn = document.querySelector(".pilea-add")
var pilea = "pilea"

var addPilea = function() {
localStorage.setItem("pilea", pilea)
}

if (pileaBtn) {
pileaBtn.addEventListener("click", addPilea)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == pilea) {
        var pileaAdd = document.querySelector(".saved-plants")
        var pileaText = document.createElement('a')
        pileaText.href = "./plant-pages/pilea.html"
        pileaText.textContent = "Pilea"
        pileaText.classList.add("fiddle-style")
    
        pileaAdd.appendChild(pileaText)
    } 
}
// End Pilea Plant//

// Pitcher Plant //
var pitcherBtn = document.querySelector(".pitcher-add")
var pitcher = "pitcher"

var addPitcher = function() {
localStorage.setItem("pitcher", pitcher)
}

if (pitcherBtn) {
pitcherBtn.addEventListener("click", addPitcher)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == pitcher) {
        var pitcherAdd = document.querySelector(".saved-plants")
        var pitcherText = document.createElement('a')
        pitcherText.href = "./plant-pages/pitcher-plant.html"
        pitcherText.textContent = "Pitcher"
        pitcherText.classList.add("fiddle-style")
    
        pitcherAdd.appendChild(pitcherText)
    } 
}
// End Pitcher Plant //

// Rubber-Tree Plant //
var rubberBtn = document.querySelector(".rub-add")
var rubber = "rubber"

var addRubber = function() {
localStorage.setItem("rubber", rubber)
}

if (rubberBtn) {
rubberBtn.addEventListener("click", addRubber)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == rubber) {
        var rubberAdd = document.querySelector(".saved-plants")
        var rubberText = document.createElement('a')
        rubberText.href = "./plant-pages/rubber-tree.html"
        rubberText.textContent = "Rubber Tree"
        rubberText.classList.add("fiddle-style")
    
        rubberAdd.appendChild(rubberText)
    } 
}
// End Rubber-Tree Plant //

// Spider-Plant //
var spiderBtn = document.querySelector(".spider-add")
var spider = "spider"

var addSpider = function() {
localStorage.setItem("spider", spider)
}

if (spiderBtn) {
spiderBtn.addEventListener("click", addSpider)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == spider) {
        var spiderAdd = document.querySelector(".saved-plants")
        var spiderText = document.createElement('a')
        spiderText.href = "./plant-pages/spider-plant.html"
        spiderText.textContent = "Spider Plant"
        spiderText.classList.add("fiddle-style")
    
        spiderAdd.appendChild(spiderText)
    } 
}
// End Spider-Plant //

// Umbrella Tree //
var umbrellaBtn = document.querySelector(".umm-add")
var umbrella = "umbrella"

var addUmbrella = function() {
localStorage.setItem("umbrella", umbrella)
}

if (umbrellaBtn) {
umbrellaBtn.addEventListener("click", addUmbrella)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == umbrella) {
        var umbrellaAdd = document.querySelector(".saved-plants")
        var umbrellaText = document.createElement('a')
        umbrellaText.href = "./plant-pages/umbrella-tree.html"
        umbrellaText.textContent = "Umbrella Tree"
        umbrellaText.classList.add("fiddle-style")
    
        umbrellaAdd.appendChild(umbrellaText)
    } 
}
// End Umbrella Tree //

// zz Plant //
var zzBtn = document.querySelector(".zz-add")
var zz = "zz"

var addZz = function() {
localStorage.setItem("zz", zz)
}

if (zzBtn) {
zzBtn.addEventListener("click", addZz)
}
for (i=0;i<localStorage.length;i++) {
    if (localStorage.getItem(localStorage.key(i)) == zz) {
        var zzAdd = document.querySelector(".saved-plants")
        var zzText = document.createElement('a')
        zzText.href = "./plant-pages/zz-plant.html"
        zzText.textContent = "ZZ Plant"
        zzText.classList.add("fiddle-style")
    
        zzAdd.appendChild(zzText)
    } 
}










