//Div
var DivOne=document.getElementById('DivOne');   var DivTwo=document.getElementById('DivTwo');

//Rows
var row=0;

//Counter
var CounterT=document.getElementById('CounterTries');
var Counter=5;
CounterT.innerHTML="Tries left: "+Counter;
console.log(Counter);

//Lingo word
var RandomWord=words[Math.floor(Math.random() * words.length)];
var WordSplit=RandomWord.split("");   console.log(WordSplit); 

//Buttons
var CheckBtn=document.getElementById('CheckBtn');

for(i=0;i<=4;i++){
    for(j=0;j<=4;j++){
        var btn=document.createElement("BUTTON");
        DivTwo.appendChild(btn);
        btn.id="row"+i+"btn"+j;
        btn.innerHTML=j;
        btn.style.backgroundColor="red";
    };
};

for(i=0;i<=4;i++){
    document.getElementById("row"+i+"btn"+0).innerHTML=WordSplit[0];
    document.getElementById("row"+i+"btn"+0).style.backgroundColor="green";
}

CheckBtn.onclick=function(){
    //User input
    var WordInput=document.getElementById('WordInput');
    var UserInput=WordInput.value.split("");    console.log(UserInput);
    //Empty array for correct letters
    var CorrectArray=[];

    //Controlling both arrays
    for(i=0;i<=4;i++){
        if(WordSplit[i]==UserInput[i]){
            CorrectArray[i]=true;
        }else{
            CorrectArray[i]=false;
        };
    };

    for(i=0;i<=4;i++){
        var BtnInput=document.getElementById("row"+row+"btn"+i);
        BtnInput.innerHTML=UserInput[i];
        if(CorrectArray[i]==true){
            BtnInput.style.backgroundColor="green";
            WordSplit[i]=null;
        };
    };

    for(i=0;i<=4;i++){
        var BtnInput=document.getElementById("row"+row+"btn"+i);
        BtnInput.innerHTML=UserInput[i];
        if(WordSplit.includes(UserInput[i])){       //controleert of de opgegeven waarde aanwezig is in een array
            BtnInput.style.backgroundColor="yellow";
            BtnInput.style.borderRadius="100%";
        };
    };

    row++

    //Counter 
    Counter--
    console.log(Counter);
    CounterT.innerHTML="Tries left: "+Counter;
    if(Counter<1){
        alert("You ran out of tries.");
        window.location.reload();
    };
};