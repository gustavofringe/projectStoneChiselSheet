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

var elements = ["pierre", "feuille", "ciseaux"];
var computer = elements[Math.floor(Math.random() * elements.length)];
var scissors = document.getElementById('scissors');
var leaf = document.getElementById('leaf');
var rock = document.getElementById('rock');
document.getElementById('user').value = 0;
document.getElementById('computer').value = 0;
/**
 *
 * computerChoice function
 * @return result of computer choice
 *
 * */
var computerChoice = function (msgc, msgp, msgf) {
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
        computer = document.getElementById('leafC')
        var elemL = computer;
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
    var elem = scissors;
    var pos = 0;
    var id = setInterval(frame, 9);
    function frame() {
        if (pos == 120) {
            elem.classList.remove('translateAnimationClass');
            clearInterval(id);
        } else {
            elem.classList.add('translateAnimationClass');
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
    setTimeout(function () {
        computerChoice('Match null', 'L\'ordi gagne', 'Vous gagne');
    }, 1500);
    winner();
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
    var elem = leaf;
    var pos = 0;
    var id = setInterval(frame, 9);
    function frame() {
        if (pos == 120) {
            elem.classList.remove('translateAnimationClass');
            clearInterval(id);
        } else {
            elem.classList.add('translateAnimationClass');
            pos++;
            elem.style.bottom = '80px';
            elem.style.left = pos + 'px';
        }
    }
    setTimeout(function () {
        computerChoice('ordi gagne', 'vous gagne', 'match null');
    }, 1500);
    winner();
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
    var elem = rock;
    var pos = 0;
    var id = setInterval(frame, 9);
    function frame() {
        if (pos == 120) {
            elem.classList.remove('translateAnimationClass');
            clearInterval(id);
        } else {
            elem.classList.add('translateAnimationClass');
            pos++;
            elem.style.top = '20px';
            elem.style.left = pos + 'px';
        }
    }
    setTimeout(function () {
        computerChoice('vous gagne', 'match null', 'ordi gagne');
    }, 1500)
    winner();
}
/**
 *
 * give a winner
 * @return point
 *
 */
var winner = function () {
    if (computer === "feuille") {
        if (userChoice === "pierre") {
            computerWin = true;
            print();
        } else if (userChoice === "ciseaux") {
            userWin = true;
            print();
        }
    } else if (computer === "ciseaux") {
        if (userChoice === "pierre") {
            userWin = true;
            print();
        } else if (userChoice === "feuille") {
            computerWin = true;
            print();
        }
    } else if (computer === "pierre") {
        if (userChoice === "feuille") {
            userWin = true;
            print();
        } else if (userChoice === "ciseaux") {
            computerWin = true;
            print();
        }
    }
}
/**
 *
 * print a result
 *
 *
 */
var print = function () {
    if (userWin == true) {
        userChance++;
        document.getElementById('user').value = userChance;
    } else if (computerWin == true) {
        computerChance++;
        document.getElementById('computer').value = computerChance;
    }
}




