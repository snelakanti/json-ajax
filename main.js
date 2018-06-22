var animalContainer = document.getElementById('animal-info');

var btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json',true);
    ourRequest.onload = function(){
    var data =  JSON.parse(ourRequest.responseText);
    renderHTML(data);
    }
    ourRequest.send();
})


function renderHTML(rData){
    var htmlstring = "this is a test"
animalContainer.insertAdjacentHTML('beforeend', htmlstring)
}
