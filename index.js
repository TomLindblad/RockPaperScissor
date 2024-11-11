let myWeaponChoice;
let enemyWeaponChoice;
const weaponlist = ["ROCK", "PAPER", "SCISSOR"];

let timesWon = 0;
let timesLost = 0;
let winStreak = 0;

function compareWeapons(myWeapon, enemyWeapon){
    myWeaponChoice = myWeapon;
    enemyWeaponChoice = enemyWeapon

    switch (enemyWeaponChoice){
        case "ROCK": document.getElementById("enemyIcon").className = "fa-regular fa-hand-back-fist"; 
            break;
        case "PAPER": document.getElementById("enemyIcon").className = "fa-regular fa-hand"; 
            break;
        case "SCISSOR": document.getElementById("enemyIcon").className = "fa-regular fa-hand-scissors"; 
            break;
        default: document.getElementById("enemyIcon").className = "fa-solid fa-question";
    }

    if(myWeapon == enemyWeapon){
        document.getElementById("resultText").textContent = `IT'S A TIE!`;
        setTimeout(reset, 800);
    }

    else if (myWeapon == "ROCK" && enemyWeapon == "SCISSOR"){
        win();
    }

    else if (myWeapon == "PAPER" && enemyWeapon == "ROCK"){
        win();
    }

    else if (myWeapon == "SCISSOR" && enemyWeapon == "PAPER"){
        win();
    }

    else if (myWeapon == "ROCK" && enemyWeapon == "PAPER"){
        lose();
    }

    else if (myWeapon == "PAPER" && enemyWeapon == "SCISSOR"){
        lose();
    }

    else  /*(myWeapon == "SCISSOR" && enemyWeapon == "ROCK")*/{
        lose();
    }
}

function getEnemyWeapon(){
    i = Math.floor(Math.random() * 3);
    return (weaponlist[i]);
}

function checkHighscore(){
    timesWon > winStreak ? winStreak = timesWon : winStreak = winStreak;            // DO SOMETHING WITH THIS? 
}

function win(){
    document.getElementById("enemycard").style.background = "rgb(214, 38, 38)";
    document.getElementById(myWeaponChoice).classList.remove("cardcolor");
    document.getElementById(myWeaponChoice).classList.add("win");
    document.getElementById("resultText").textContent = `${myWeaponChoice} BEATS ${enemyWeaponChoice}`;
    timesWon++
    document.getElementById("winText").textContent = `Times won: ${timesWon}`;
    setTimeout(reset, 800);
}

function lose(){
    document.getElementById("enemycard").style.background = "rgb(13, 209, 62)";
    document.getElementById(myWeaponChoice).classList.remove("cardcolor");
    document.getElementById(myWeaponChoice).classList.add("lose");
    document.getElementById("resultText").textContent = `${enemyWeaponChoice} BEATS ${myWeaponChoice}`;
    timesLost++
    document.getElementById("loseText").textContent = `Times lost: ${timesLost}`;
    setTimeout(reset, 800);
}

function reset(){
    document.getElementById("enemycard").style.background = "rgb(230, 230, 134)";
    document.getElementById(myWeaponChoice).classList.add("cardcolor");
    document.getElementById(myWeaponChoice).classList.remove("win");
    document.getElementById(myWeaponChoice).classList.remove("lose");
    document.getElementById("enemyIcon").className = "fa-solid fa-question";
}