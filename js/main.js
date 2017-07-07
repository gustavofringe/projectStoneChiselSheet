/*(function () {
 var user = prompt('Quel est ton prénom ?').toLowerCase();
 document.getElementById("player").innerHTML = "Bienvenue "+user+" pret pour jouer au pendu?"
 })();
 var audio = new Audio('../song/Rocky.mp3');
 audio.play();*/
var computerChance = 0;
var userChance = 0;
var userChoice;
var userWin;
var computerWin;
var computerChoice;
var elements = ["pierre", "feuille", "ciseaux"];
var scissors = document.getElementById('scissors');
var leaf = document.getElementById('leaf');
var rock = document.getElementById('rock');
var scissorsComputer = document.getElementById('scissorsComputer');
var rockComputer = document.getElementById('rockComputer');
var leafcomputer = document.getElementById('leafComputer');
var result = document.getElementById('result');
document.getElementById('user').value = 0;
document.getElementById('computer').value = 0;
/**
 *
 * computerChoice function
 * @return result of computer choice
 *
 * */
/*
var computerChoices = function (msgc, msgp, msgf) {
    if (computer === 'ciseaux') {
        computer = document.getElementById('scissorsC');
        var elemC = computer;
        var posC = 0;
        var idC = setInterval(frameC, 9);
        document.getElementById('result').innerHTML = msgc;
        function frameC() {
            if (posC == 120) {
                elemC.classList.remove('translateAnimationClassC');
                clearInterval(idC);
            } else {
                elemC.classList.add('translateAnimationClassC');
                posC++;
                elemC.style.top = posC + 'px';
                elemC.style.right = posC + 'px';
            }
        }
    }
    if (computer === 'pierre') {
        computer = document.getElementById('rockC')
        var elemR = computer;
        var posR = 0;
        var idR = setInterval(frameR, 9);
        document.getElementById('result').innerHTML = msgp;

        function frameR() {
            if (posR == 120) {
                elemR.classList.remove('translateAnimationClassC');
                clearInterval(idR);
            } else {
                elemR.classList.add('translateAnimationClassC');
                posR++;
                elemR.style.bottom = '-20px';
                elemR.style.right = posR + 'px';
            }
        }
    }
    if (computer === 'feuille') {
        computer = document.getElementById('leafC');
        computer.classList.add('translateAnimationClassC');
        setTimeout(function () {
            computer.classList.toggle('translateAnimationClassC')
        }, 10000);
        document.getElementById('result').innerHTML = msgf;
        /*var elemL = computer;
         var posL = 0;
         var idL = setInterval(frameL, 9);
         document.getElementById('result').innerHTML = msgf;
         function frameL() {
         if (posL == 120) {
         elemL.classList.remove('translateAnimationClassC');
         clearInterval(idL);
         } else {
         elemL.classList.add('translateAnimationClassC');
         posL++;
         elemL.style.bottom = '80px';
         elemL.style.right = posL + 'px';
         }
         }
    }
}
*/
/**
 *
 * scissor function
 * @return user choice onclick
 *
 * */
scissors.onclick = function () {
    leaf.classList.add('unclickable');
    rock.classList.add('unclickable');
    userChoice = this.alt;
    scissors.classList.add('animateScissors');
    generateComputer();
    winner();
    setTimeout(function () {
        leaf.classList.toggle('unclickable')
    }, 8000);
    setTimeout(function () {
        scissors.classList.toggle('animateScissors')
    }, 8000);
    setTimeout(function () {
        rock.classList.toggle('unclickable')
    }, 8000);
}
/**
 *
 * hand function
 * @return user choice onclick
 *
 * */
leaf.onclick = function () {
    scissors.classList.add('unclickable');
    rock.classList.add('unclickable');
    userChoice = this.alt
    leaf.classList.add('animateLeaf');
    generateComputer();
    winner();
    setTimeout(function () {
        leaf.classList.toggle('animateLeaf')
    }, 8000);
    setTimeout(function () {
        scissors.classList.toggle('unclickable')
    }, 8000);
    setTimeout(function () {
        rock.classList.toggle('unclickable')
    }, 8000);
}
/**
 *
 * stone function
 * @return user choice onclick
 *
 * */
rock.onclick = function () {
    leaf.classList.add('unclickable');
    scissors.classList.add('unclickable');
    userChoice = this.alt;
    rock.classList.add('animateRock');
    generateComputer();
    console.log(userChoice)
    console.log(computerChoice)
    winner();
    setTimeout(function () {
        leaf.classList.toggle('unclickable')
    }, 8000);
    setTimeout(function () {
        scissors.classList.toggle('unclickable')
    }, 8000);
    setTimeout(function () {
        rock.classList.toggle('animateRock')
    }, 8000);
}
/**
 *
 * generate choice computer
 * @return computerchoice
 *
 * */
function generateComputer() {
    var number = Math.floor(Math.random() * elements.length);
    for (var i = 0; i < elements.length; i++) {
        computerChoice = elements[number];
    }
    if(computerChoice === "feuille"){
        leafComputer.classList.toggle('animateLeafComputer');
        setTimeout(function(){leafComputer.classList.remove('animateLeafComputer');},8000)
    }else if(computerChoice === "pierre"){
        rockComputer.classList.toggle('animateRockComputer');
        setTimeout(function(){rockComputer.classList.remove('animateRockComputer');},8000)
    }else if(computerChoice === "ciseaux"){
        scissorsComputer.classList.toggle('animateScissorsComputer');
        setTimeout(function(){scissorsComputer.classList.remove('animateScissorsComputer');},8000)
    }
}
/**
 *
 * give a winner
 * @return point
 *
 */
var winner = function () {
    if (userChoice === computerChoice){
        result.innerHTML = "match null";
    }
    if (userChoice === "feuille") {
        if (computerChoice === "pierre") {
            userWin = true;
            print();
        }else if (computerChoice === "ciseaux") {
            computerWin = true;
            print();
        }
    }
    if (userChoice === "ciseaux") {
        if (computerChoice === "pierre") {
            computerWin = true;
            print();
        }else if (computerChoice === "feuille") {
            userWin = true;
            print();
        }
    }
    if (userChoice === "pierre") {
        if (computerChoice === "feuille") {
            computerWin = true;
            print();
        }else if (computerChoice === "ciseaux") {
            userWin = true;
            print();
        }
    }
}
/**
 *
 * resetting chance
 *
 *
 * */
function resetWinner() {
    userWin = false;
    computerWin = false;
}
/**
 *
 * print a result
 *
 *
 */
var print = function () {
    if (userWin == true) {
        resetWinner();
        userChance++;
        result.innerHTML = "vous gagne";
        document.getElementById('user').value = userChance;
    }else if (computerWin == true) {
        resetWinner();
        computerChance++;
        result.innerHTML = "ordi gagne";
        document.getElementById('computer').value = computerChance;
    }
}




