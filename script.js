//Div
var DivOne=document.getElementById('DivOne');   var DivTwo=document.getElementById('DivTwo');

//Word List
var RandomWord=words[Math.floor(Math.random() * words.length)];
var RandomWordSplit=RandomWord.split("");   console.log(RandomWordSplit);

//Buttons
for(i=1;i<=5;i++){
    var btn=document.createElement("BUTTON");   btn.id="btn"+i;    btn.innerHTML=i;
    DivTwo.appendChild(btn);
}
btn1.innerHTML=RandomWordSplit[0];
btn1.style.backgroundColor="green";