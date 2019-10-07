
var h1 = document.querySelector('h1');
var button = document.querySelector('.submit');
var input = document.querySelector('.dog-name');

button.addEventListener('click', function(event){
  h1.innerText = (`A Site About ${input.value}`);
  event.preventDefault();
});

var howButton = document.querySelector('#how');
var howContent = document.querySelector('#dog-how');


howButton.addEventListener('click', function(event){
  if (howContent.style.display==="none") {
    howContent.style.display="block";
  } else {
    howContent.style.display="none";
  }
})



var whatButton = document.querySelector('#what');
var whatContent = document.querySelector('#dog-what');

whatButton.addEventListener('click', function(event){
  if (whatContent.style.display==="none") {
    whatContent.style.display="block";
  } else {
    whatContent.style.display="none";
  }
})


var factsButton = document.querySelector('#facts');
var factsContent = document.querySelector('#dog-facts');

factsButton.addEventListener('click', function(event){
  if (factsContent.style.display==="none") {
    factsContent.style.display="block";
  } else {
    factsContent.style.display="none";
  }
})

var contentUpdate = document.querySelector('#content-update');
var contentUpdateButton = document.querySelector('#content-update-button');
var select = document.querySelector('#select-box');
var dogHow = document.querySelector('#dog-how');
var dogWhat = document.querySelector('#dog-what');
var dogFacts = document.querySelector('#dog-facts');

contentUpdateButton.addEventListener('click', function(event){
  if (select.value==="how"){
    dogHow.innerText = contentUpdate.value;
  } else if (select.value==="what"){
    dogWhat.innerText = contentUpdate.value;
  } else if (select.value==="facts"){
    dogFacts.innerText = contentUpdate.value;
  }
})
