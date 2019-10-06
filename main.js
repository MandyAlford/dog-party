
var h1 = document.querySelector('h1');
var button = document.querySelector('.submit');
var input = document.querySelector('.dog-name');

button.addEventListener('click', function(event){
  h1.innerText = (`A Site About ${input.value}`);
  event.preventDefault();
});
