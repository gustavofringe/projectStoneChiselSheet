(function () {
    //var user = prompt('Quel est ton prénom ?').toLowerCase();
    //document.getElementById("player").innerHTML = "Bienvenue "+user+" prêt pour jouer au pendu?"
})();
var computerChance = 0;
var userChance = 0;
while (computerChance <= 3 && userChance <= 3) {
    var elements = ["pierre", "feuille", "ciseaux"];
    var computer = elements[Math.floor(Math.random() * elements.length)];
    var scissors = document.getElementById('scissors');
    var leaf = document.getElementById('leaf');
    var rock = document.getElementById('rock');
    document.getElementById('user').value = userChance;
    document.getElementById('computer').value = computerChance;
    var scissor = function () {
        rock.style.bottom = null;
        rock.style.left = null;
        leaf.style.bottom = null;
        leaf.style.left = null;
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

        if (computer === 'ciseaux') {
            computer = document.getElementById('scissorsC')
            var elemC = computer;
            var posC = 0;
            var idC = setInterval(frameC, 9);
            document.getElementById('result').innerHTML = 'Match null'
            function frameC() {
                if (pos == 120) {
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
            document.getElementById('result').innerHTML = 'L\'ordi gagne';
            computerChance++;
            function frameR() {
                if (pos == 120) {
                    elemR.classList.remove('translateAnimationClassC');
                    clearInterval(idR);
                } else {
                    elemR.classList.add('translateAnimationClassC');
                    posR++;
                    elemR.style.bottom = '0px';
                    elemR.style.right = posR + 'px';
                }
            }
        }
    }
}

/*leaf.addEventListener('click', function () {

    var elem = leaf;
    var pos = 0;
    var id = setInterval(frame, 9);

    function frame() {
        if (pos == 105) {
            elem.classList.remove('translateAnimationClass');
            clearInterval(id);
        } else {

            elem.classList.add('translateAnimationClass');
            pos++;
            elem.style.bottom = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
})
rock.addEventListener('click', function () {
    var elem = rock;
    var pos = 0;
    var id = setInterval(frame, 9);

    function frame() {
        if (pos == 90) {
            elem.classList.remove('translateAnimationClass');
            clearInterval(id);
        } else {

            elem.classList.add('translateAnimationClass');
            pos++;
            elem.style.bottom = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
})*/


