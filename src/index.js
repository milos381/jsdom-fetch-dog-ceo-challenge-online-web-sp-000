console.log('%c HI', 'color: firebrick')
let breeds = [];
document.addEventListener('DOMContentLoaded', function () {
    loadImages();
    loadBreedOptions();
});
function loadImages() {
    let imageUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imageUrl)
    .then(resp => resp.json())
    .then(json => addImages(json))
    
}
function addImages(json) {
    
    let container = document.querySelector('#dog-image-container');
    json.message.forEach(image => {
        let newImageEl = document.createElement('img'); 
        newImageEl.src = image;
        container.appendChild(newImageEl);
    });
}
function loadBreedOptions() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json))
}
function addBreeds(json) {
    let ul = document.querySelector('#dog-breeds');
    let li = document.createElement('li');
    
    for (const key in Object.keys(json.message)) {
        console.log(Object.keys(json.message)[key]);
        li.innerText = Object.keys(json.message)[key];
        ul.appendChild(li);
    }
    
}