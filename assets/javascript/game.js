var win=0;
var lose=0;
var currentResult="";
var firstCrystalNumber;
var intFirstCrystal=0;
var secondCrystalNumber;
var intSecondCrystal=0;
var thirdCrystalNumber;
var intThirdCrystal=0;
var fourthCrystalNumber;
var intFourthCrystal=0;
var sumAllCrystal=0;


function begin(){
var guessFromComputer=Math.floor(Math.random()*120+19);
$("#computerGuess").text(guessFromComputer);
$("#result").html("<p class='p-1'>"+currentResult+"</p>");
$("#wins").html("<p class='p-1'>Wins: "+win+"</p>");
$("#losses").html("<p class='p-1'>Losses:"+lose+"</p>");


}

$("#firstCrystal").on("click",function(){
     firstCrystalNumber = Math.floor(Math.random()*12+1);
     intFirstCrystal =intFirstCrystal+firstCrystalNumber;
    $("#selectedCrystalScore").text(firstCrystalNumber);
})


$("#secondCrystal").on("click",function(){
    secondCrystalNumber = Math.floor(Math.random()*12+1);
    intSecondCrystal=intSecondCrystal+secondCrystalNumber;
   $("#selectedCrystalScore").text(secondCrystalNumber);
})


$("#thirdCrystal").on("click",function(){
    thirdCrystalNumber = Math.floor(Math.random()*12+1);
    intThirdCrystal=intThirdCrystal+thirdCrystalNumber;
   $("#selectedCrystalScore").text(thirdCrystalNumber);
})

$("#fourthCrystal").on("click",function(){
    fourthCrystalNumber = Math.floor(Math.random()*12+1);
    intFourthCrystal=intFourthCrystal+fourthCrystalNumber;
   $("#selectedCrystalScore").text(fourthCrystalNumber);
})

sumAllCrystal=intFirstCrystal+intSecondCrystal+intThirdCrystal+intFourthCrystal;
console.log(sumAllCrystal);

begin();