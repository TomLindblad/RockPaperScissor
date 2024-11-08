let myWeapon;
let enemyWeapon = "rock";
const weaponlist = ["rock", "paper", "scissor"];

let timesWon = 0;
let timesLost = 0;
let winStreak = 0;

function compareWeapons(myWeapon, enemyWeapon){
    console.log(enemyWeapon);
    console.log(timesWon);
    console.log(timesLost);
    checkHighscore()
    console.log(winStreak);

    if(myWeapon == enemyWeapon){
        document.getElementById("winNumb").textContent = "its a tie.";
    }

    else if (myWeapon == "rock" && enemyWeapon == "scissor"){
        document.getElementById("winNumb").textContent = "you win.";
        timesWon++
    }

    else if (myWeapon == "paper" && enemyWeapon == "rock"){
        document.getElementById("winNumb").textContent = "you win.";
        timesWon++
    }

    else if (myWeapon == "scissor" && enemyWeapon == "paper"){
        document.getElementById("winNumb").textContent = "you win.";
        timesWon++
    }

    else if (myWeapon == "rock" && enemyWeapon == "paper"){
        document.getElementById("winNumb").textContent = "you lose.";
        timesLost++
    }

    else if (myWeapon == "paper" && enemyWeapon == "scissor"){
        document.getElementById("winNumb").textContent = "you lose.";
        timesLost++
    }

    else if (myWeapon == "scissor" && enemyWeapon == "rock"){
        document.getElementById("winNumb").textContent = "you lose.";
        timesLost++
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