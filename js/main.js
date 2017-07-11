/**
 *
 * document title
 *
 * */
document.title = "Pierre|Feuille|Ciseaux";
/**
 *
 * change url
 *
 * */
function url() {
    history.pushState({
        path: this.path
    }, '', 'pierre-feuille-ciseaux');
}
url();
/**
 *
 *
 * load player name
 *
 * */

(function () {
 var user = prompt('Quel est ton prénom ?').toLowerCase();
 document.getElementById("player").innerHTML = "Bienvenue "+user+" pret pour jouer au pierre, feuille, ciseaux?"
 })();
/**
 *
 * charge play song
 *
 *
 * */

 var audio = new Audio('../song/Rocky.mp3');
 audio.play();
 /**
  *
  *
  *
  * */
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
var leafComputer = document.getElementById('leafComputer');
var result = document.getElementById('result');
document.getElementById('user').value = 0;
document.getElementById('computer').value = 0;
var end = document.getElementById('end');
/**
 *
 * scissor function
 * @return user choice onclick
 *
 * */
scissors.onclick = function () {
    scissors.classList.add('unclickable');
    leaf.classList.add('unclickable');
    rock.classList.add('unclickable');
    userChoice = this.alt;
    scissors.classList.add('animateScissors');
    generateComputer();
    winner();
    setTimeout(function () {
        leaf.classList.toggle('unclickable');
    }, 3000);
    setTimeout(function () {
        scissors.classList.toggle('animateScissors');
    }, 3000);
    setTimeout(function () {
        rock.classList.toggle('unclickable');
        scissors.classList.remove('unclickable');
    }, 3000);
    haveWin();
}
/**
 *
 * hand function
 * @return user choice onclick
 *
 * */
leaf.onclick = function () {
    leaf.classList.add('unclickable');
    scissors.classList.add('unclickable');
    rock.classList.add('unclickable');
    userChoice = this.alt
    leaf.classList.add('animateLeaf');
    generateComputer();
    winner();
    setTimeout(function () {
        leaf.classList.toggle('animateLeaf');
    }, 3000);
    setTimeout(function () {
        scissors.classList.toggle('unclickable');
    }, 3000);
    setTimeout(function () {
        rock.classList.toggle('unclickable');
        leaf.classList.remove('unclickable');
    }, 3000);
    haveWin();
}
/**
 *
 * stone function
 * @return user choice onclick
 *
 * */
rock.onclick = function () {
    rock.classList.add('unclickable')
    leaf.classList.add('unclickable');
    scissors.classList.add('unclickable');
    userChoice = this.alt;
    rock.classList.add('animateRock');
    generateComputer();
    winner();
    setTimeout(function () {
        leaf.classList.toggle('unclickable');
    }, 3000);
    setTimeout(function () {
        scissors.classList.toggle('unclickable');
    }, 3000);
    setTimeout(function () {
        rock.classList.toggle('animateRock');
        rock.classList.remove('unclickable');
    }, 3000);
    haveWin();
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
    if (computerChoice === "feuille") {
        leafComputer.classList.toggle('animateLeafComputer');
        setTimeout(function () {
            leafComputer.classList.remove('animateLeafComputer');
        }, 3000)
    } else if (computerChoice === "pierre") {
        rockComputer.classList.toggle('animateRockComputer');
        setTimeout(function () {
            rockComputer.classList.remove('animateRockComputer');
        }, 3000)
    } else if (computerChoice === "ciseaux") {
        scissorsComputer.classList.toggle('animateScissorsComputer');
        setTimeout(function () {
            scissorsComputer.classList.remove('animateScissorsComputer');
        }, 3000)
    }
}
/**
 *
 * give a winner
 * @return point
 *
 */
var winner = function () {
    if (userChoice === computerChoice) {
        result.innerHTML = "match null";
    }
    if (userChoice === "feuille") {
        if (computerChoice === "pierre") {
            userWin = true;
            print();
        } else if (computerChoice === "ciseaux") {
            computerWin = true;
            print();
        }
    }
    if (userChoice === "ciseaux") {
        if (computerChoice === "pierre") {
            computerWin = true;
            print();
        } else if (computerChoice === "feuille") {
            userWin = true;
            print();
        }
    }
    if (userChoice === "pierre") {
        if (computerChoice === "feuille") {
            computerWin = true;
            print();
        } else if (computerChoice === "ciseaux") {
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
    } else if (computerWin == true) {
        resetWinner();
        computerChance++;
        result.innerHTML = "ordi gagne";
        document.getElementById('computer').value = computerChance;
    }
}
/**
 *
 * win function
 * @return deload window
 *
 *
 * */
var haveWin = function () {
    if (userChance === 3) {
        setTimeout(function () {
            audio.pause();
        }, 3000)
        setTimeout(function () {
            end.classList.add('win');
        }, 3000)
        setTimeout(function () {
            end.insertAdjacentHTML('afterbegin', '<div id="replay" onClick="window.location.reload()">Rejouer</div>')
        }, 3000)
    }
    if (computerChance === 3) {
        setTimeout(function () {
            audio.pause();
        }, 3000)
        setTimeout(function () {
            end.classList.add('lose');
        }, 3000)
        setTimeout(function () {
            end.insertAdjacentHTML('afterbegin', '<div id="replay" onClick="window.location.reload()">Rejouer</div>')
        }, 3000)
    }
}



