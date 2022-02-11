
var randumNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+ randumNumber1 + ".png";
var source= "images/" + randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",source);

var randomNumber2= Math.floor(Math.random()*6)+1;
var randomDiceImag="dice"+randomNumber2+ ".png";
var sourc= "images/" + randomDiceImag;
var image2= document.querySelectorAll("img")[1];
image2.setAttribute("src",sourc);

var p1=prompt("Enter the name of player1 -")
var p2=prompt("Enter the name of player2 -")
document.querySelectorAll("p")[0].innerHTML=p1;
document.querySelectorAll("p")[1].innerHTML=p2;

if(randumNumber1>randomNumber2){
    document.querySelector("h1").innerHTML= p1+' wins';
}else if(randomNumber2>randumNumber1){
    document.querySelector("h1").innerHTML= p2+ " wins";
}
else{
    document.querySelector("h1").innerHTML="Its a Tie";
}


