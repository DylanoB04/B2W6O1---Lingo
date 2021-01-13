var div = document.getElementById('container');

//Woord uit de array
var randomWord = words[Math.floor(Math.random() * words.length)];
var wordSplit = randomWord.split("");
console.log(wordSplit);
var text = document.getElementById('text');
text.innerText = randomWord[0]

//Ingevoerd woord
var inputWord = prompt("Raad het woord");
var inputSplit = inputWord.split("");
var inputText = document.getElementById('inputText');
inputText.innerText = inputWord;