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


// *********************** Page Settings *******************************

var homePageSettings = {
  hidden: [makeOwnPage, viewSavedPage, homeBtn],
  visible: [homePage, randomBtn, saveBtn]
}

var makeOwnPageSettings = {
  hidden: [homePage, randomBtn, saveBtn],
  visible: [homeBtn, makeOwnPage]
}

var viewSavedPageSettings = {
  hidden: [homePage, randomBtn, saveBtn],
  visible: [homeBtn, viewSavedPage]
}

// *********************** end *******************************

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];


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
  switchPage(homePageSettings)
}

function showMakeOwnPage() {
  switchPage(makeOwnPageSettings)
}

function viewSaved() {
  switchPage(viewSavedPageSettings)
}

// *********************** Utility Functions *******************************

function reveal(htmlElement){
  htmlElement.classList.remove("hidden")
}

function conceal(htmlElement){
  htmlElement.classList.add("hidden")
}

// "switchPage" hides the elements that should be hidden for a given page,
// and reveals the items that should be revealed for that page
// the resulting experience for the user is as if they had navigated to that page
function switchPage(page){
  var longestLength;
  // make sure we run the loop at least enough times to visit every element in the longer of the two arrays (which will also be enough for the shorter of the two)
  page.hidden.length > page.visible.length ? (longestLength = page.hidden.length) : (longestLength = page.visible.length)

  // if there's an element in either array at any index between 0 and the longest index between the two,
  // if it's in the hidden array, hide it. if it's in the visible array, show it.
  for(var i = 0;i < longestLength;i++){
    page.hidden[i] ? conceal(page.hidden[i]) : console.log('No item at hidden[i]')
    page.visible[i] ? reveal(page.visible[i]) : console.log('condition 2')
  }
}

// the functionality of revealList and concealList were combined into switchPage

// function revealList(htmlElements){
//   for(var i = 0;i < htmlElements.length;i++){
//     reveal(htmlElements[i])
//   }
// }
//
// function concealList(htmlElements){
//   for(var i = 0;i < htmlElements.length;i++){
//     conceal(htmlElements[i])
//   }
// }

// *********************** end *******************************


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
