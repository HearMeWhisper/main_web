window.onunload = function(){
    localStorage.setItem('playerCount', playerCount);
    for (i=1; i<9; i++){
        localStorage.setItem('playerName'+i, document.getElementById('name'+i).innerHTML);
        localStorage.setItem('lifeCount'+i, document.getElementById('lifeCount'+i).innerHTML)
    }
};
window.onload = function(){
    localStorage.getItem('playerCount');
    for (i=1; i<9; i++){
        if (localStorage.getItem('playerName'+i)){
        document.getElementById('name'+i).innerHTML = localStorage.getItem('playerName'+i);
        console.log(document.getElementById('name'+i).innerHTML)
        }
  
        if (localStorage.getItem('lifeCount'+i)){
        
        document.getElementById('lifeCount'+i).innerHTML = localStorage.getItem('lifeCount'+i)
        }
       
    }
};



const startLife = 20;
let playerCount;
if (!localStorage.getItem('playerCount')) {playerCount = 1; localStorage.setItem('playerCount', playerCount);}
playerCount = localStorage.getItem('playerCount');
let playerCount1 = Number(playerCount)+1;
for (i=playerCount1; i<9; i++){document.getElementById("player"+i).style.display = "none" }

let lifeIncrease1 = () => {
    let counter = Number(this.document.getElementById("lifeCount1").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount1").style.color = "black";
    document.getElementById("lifeCount1").innerHTML = counter;
    };

    let lifeDecrease1 = () => {
    let counter = Number(document.getElementById("lifeCount1").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount1").style.color = "red";
    document.getElementById("lifeCount1").innerHTML = counter;
    };

    let lifeIncrease2 = () => {
    let counter = Number(this.document.getElementById("lifeCount2").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount2").style.color = "black";
    document.getElementById("lifeCount2").innerHTML = counter;
    };

    let lifeDecrease2 = () => {
    let counter = Number(document.getElementById("lifeCount2").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount2").style.color = "red";
    document.getElementById("lifeCount2").innerHTML = counter;
    };

    let lifeIncrease3 = () => {
    let counter = Number(this.document.getElementById("lifeCount3").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount3").style.color = "black";
    document.getElementById("lifeCount3").innerHTML = counter;
    };

    let lifeDecrease3 = () => {
    let counter = Number(document.getElementById("lifeCount3").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount3").style.color = "red";
    document.getElementById("lifeCount3").innerHTML = counter;
    };

    let lifeIncrease4 = () => {
    let counter = Number(this.document.getElementById("lifeCount4").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount4").style.color = "black";
    document.getElementById("lifeCount4").innerHTML = counter;
    };

    let lifeDecrease4 = () => {
    let counter = Number(document.getElementById("lifeCount4").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount4").style.color = "red";
    document.getElementById("lifeCount4").innerHTML = counter;
    };

    let lifeIncrease5 = () => {
    let counter = Number(this.document.getElementById("lifeCount5").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount5").style.color = "black";
    document.getElementById("lifeCount5").innerHTML = counter;
    };

    let lifeDecrease5 = () => {
    let counter = Number(document.getElementById("lifeCount5").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount5").style.color = "red";
    document.getElementById("lifeCount5").innerHTML = counter;
    };

    let lifeIncrease6 = () => {
    let counter = Number(this.document.getElementById("lifeCount6").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount6").style.color = "black";
    document.getElementById("lifeCount6").innerHTML = counter;
    };

    let lifeDecrease6 = () => {
    let counter = Number(document.getElementById("lifeCount6").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount6").style.color = "red";
    document.getElementById("lifeCount6").innerHTML = counter;
    };

    let lifeIncrease7 = () => {
    let counter = Number(this.document.getElementById("lifeCount7").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount7").style.color = "black";
    document.getElementById("lifeCount7").innerHTML = counter;
    };

    let lifeDecrease7 = () => {
    let counter = Number(document.getElementById("lifeCount7").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount7").style.color = "red";
    document.getElementById("lifeCount7").innerHTML = counter;
    };

    let lifeIncrease8 = () => {
    let counter = Number(this.document.getElementById("lifeCount8").innerHTML);
    counter++;
    if (counter > 0) document.getElementById("lifeCount8").style.color = "black";
    document.getElementById("lifeCount8").innerHTML = counter;
    };

    let lifeDecrease8 = () => {
    let counter = Number(document.getElementById("lifeCount8").innerHTML);
    counter--;
    if (counter <= 0) document.getElementById("lifeCount8").style.color = "red";
    document.getElementById("lifeCount8").innerHTML = counter;
    };

let resetLife = () => {
for (i=1; i<9; i++){
  document.getElementById("lifeCount"+i).innerHTML = 20  
}

}

let resetName = () => {
    for (i=1; i<9; i++){
      document.getElementById("name"+i).innerHTML = "Player " +i
    }
    
    }

let addPlayer = () => {
if (playerCount != 8){
   playerCount++;
document.getElementById("player"+playerCount).style.display = ""; 
localStorage.setItem('playerCount', playerCount);
}

}

let removePlayer = () => {
if (playerCount != 1){
document.getElementById("player"+playerCount).style.display = "none"; 
playerCount--;
localStorage.setItem('playerCount', playerCount);
}

}

