let myWeaponChoice;
let enemyWeapon = "rock";
const weaponlist = ["rock", "paper", "scissor"];

let timesWon = 0;
let timesLost = 0;
let winStreak = 0;

function compareWeapons(myWeapon, enemyWeapon){
    myWeaponChoice = myWeapon;

    console.log(myWeapon);
    console.log(enemyWeapon);
    console.log(timesWon);
    console.log(timesLost);
    checkHighscore()
    console.log(winStreak);

    if(myWeapon == enemyWeapon){
        document.getElementById("resultText").textContent = `It's a tie!`;
    }

    else if (myWeapon == "rock" && enemyWeapon == "scissor"){
        win();
    }

    else if (myWeapon == "paper" && enemyWeapon == "rock"){
        win();
    }

    else if (myWeapon == "scissor" && enemyWeapon == "paper"){
        win();
    }

    else if (myWeapon == "rock" && enemyWeapon == "paper"){
        lose();
    }

    else if (myWeapon == "paper" && enemyWeapon == "scissor"){
        lose();
    }

    else if (myWeapon == "scissor" && enemyWeapon == "rock"){
        lose();
    }

/*
    switch (myWeapon){
        case myWeapon == enemyWeapon:
            console.log("its a tie.")
            break;
        case myWeapon == "rock" && enemyWeapon == "scissor":
        case myWeapon == "paper" && enemyWeapon == "rock":
        case myWeapon == "scissor" && enemyWeapon == "paper":
            console.log("you win");
            break;
        case myWeapon == "rock" && enemyWeapon == "paper":
        case myWeapon == "paper" && enemyWeapon == "scissor":
        case myWeapon == "scissor" && enemyWeapon == "rock":
            console.log("you lose");
            break;
}*/
}

function getEnemyWeapon(){
    i = Math.floor(Math.random() * 3);
    return (weaponlist[i]);
}

function checkHighscore(){
    timesWon > winStreak ? winStreak = timesWon : winStreak = winStreak;
}

function win(){
    document.getElementById("enemycard").style.background = "red";
    document.getElementById(myWeaponChoice).style.background = "green";
    timesWon++
    document.getElementById("resultText").textContent = `${myWeaponChoice} beats ${enemyWeapon}`;
    document.getElementById("winText").textContent = `Times won: ${timesWon}`;
}

function lose(){
    document.getElementById("enemycard").style.background = "green";
    document.getElementById(myWeaponChoice).style.background = "red";
    timesLost++
    document.getElementById("resultText").textContent = `${enemyWeapon} beats ${myWeaponChoice}`;
    document.getElementById("loseText").textContent = `Times lost: ${timesLost}`;
}