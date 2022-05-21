// Create variables targetting the relevant DOM elements here 👇
var coverPic = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagLine = document.querySelector('.tagline')
var priceTag = document.querySelector('.price-tag')
var randomBtn = document.querySelector('.random-cover-button')
var makeOwnBtn = document.querySelector('.make-new-button')
var makeOwnPage = document.querySelector('.form-view')
var viewSavedPage = document.querySelector('.saved-view')
var viewSaveBtn = document.querySelector('.view-saved-button')
var homePage = document.querySelector('.home-view')
var saveBtn = document.querySelector('.save-cover-button')
var homeBtn = document.querySelector('.home-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover;

// Add your event listeners here 👇
randomBtn.addEventListener('click', randomize)
makeOwnBtn.addEventListener('click', showMakeOwnPage)
viewSaveBtn.addEventListener('click', viewSaved)
homeBtn.addEventListener('click', goHome)
// Create your event handlers and other functions here 👇



randomize();
function randomize() {
    var newCover = getRandomIndex(covers)
    var newTitle = getRandomIndex(titles)
    var newTag1 = getRandomIndex(descriptors)
    var newTag2 = getRandomIndex(descriptors)
    coverPic.src = covers[newCover]
    coverTitle.innerText = titles[newTitle]
    coverTagLine.innerText = `A tale of ${descriptors[newTag1]} and ${descriptors[newTag2]}`
    return new Cover(covers[newCover], titles[newTitle], descriptors[newTag1], descriptors[newTag2])
}

function goHome() {

  var toHide = [makeOwnPage, viewSavedPage, homeBtn]

  for(var i = 0;i < toHide.length;i++){
    reveal(toHide[i])
  }

  var toShow = [randomBtn, saveBtn, homePage]

  for(var i = 0;i < toShow.length;i++){
    reveal(toShow[i])
  }

}

function reveal(htmlElement){
  htmlElement.classList.remove("hidden")
}

function conceal(htmlElement){
  htmlElement.classList.add("hidden")
}


function showMakeOwnPage() {

  homePage.classList.add("hidden")
  randomBtn.classList.add("hidden")
  saveBtn.classList.add("hidden")

  homeBtn.classList.remove("hidden")
  makeOwnPage.classList.remove("hidden")

}

function viewSaved() {

  homePage.classList.add("hidden")
  randomBtn.classList.add("hidden")
  saveBtn.classList.add("hidden")

  homeBtn.classList.remove("hidden")
  viewSavedPage.classList.remove("hidden")

}



// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
