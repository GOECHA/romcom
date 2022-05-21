// Create variables targetting the relevant DOM elements here 👇
var coverPic = document.querySelector('.cover-image')
var coverTitle = document.querySelector('.cover-title')
var coverTagLine = document.querySelector('.tagline')
var priceTag = document.querySelector('.price-tag')
var randomBtn = document.querySelector('.random-cover-button')

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];

// Add your event listeners here 👇
randomBtn.addEventListener('click', randomize)

// Create your event handlers and other functions here 👇
randomize();
function randomize() {
    var newCoverIndex = getRandomIndex(covers)
    var newTitleIndex = getRandomIndex(titles)
    var newTag1Index = getRandomIndex(descriptors)
    var newTag2Index = getRandomIndex(descriptors)

    var newCover = new Cover(covers[newCoverIndex], titles[newTitleIndex], descriptors[newTag1Index], descriptors[newTag2Index])

    coverPic.src = newCover.cover
    coverTitle.innerText = newCover.title
    coverTagLine.innerText = `A tale of ${newCover.tagline1} and ${newCover.tagline2}`
}


// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
