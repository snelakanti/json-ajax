var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-1.json',true);
ourRequest.onload = function(){
var data =  JSON.parse(ourRequest.responseText);
 
console.log(data[0]);
}
ourRequest.send();