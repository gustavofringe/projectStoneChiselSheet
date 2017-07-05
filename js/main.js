/*(function () {
    var user = prompt('Quel est ton prénom ?').toLowerCase();
    document.getElementById("player").innerHTML = "Bienvenue "+user+" prêt pour jouer au pendu?"
})();
var audio = new Audio('../song/Rocky.mp3');
audio.play();*/
var computerChance = 0;
var userChance = 0;

    var elements = ["pierre", "feuille", "ciseaux"];
    var computer = elements[Math.floor(Math.random() * elements.length)];
    var scissors = document.getElementById('scissors');
    var leaf = document.getElementById('leaf');
    var rock = document.getElementById('rock');
    document.getElementById('user').value = userChance;
    document.getElementById('computer').value = computerChance;
    /**
     *
     * computerChoice function
     * @return result of computer choice
     *
     * */
    var computerChoice = function(c,p,f,msgc,msgp,msgf){
        if (computer === 'ciseaux') {
            computer = document.getElementById('scissorsC');
            var elemC = computer;
            var posC = 0;
            var idC = setInterval(frameC, 9);
            document.getElementById('result').innerHTML = msgc;
            c++
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
            p++;

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
            f++;

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
computerChoice(null,computerChance,userChance,'Match null','L\'ordi gagne','Vous gagne');

    }
    /**
     *
     * hand function
     * @return user choice onclick
     *
     * */
    var hand = function () {
        rock.style.bottom = null;
        rock.style.left = null;
        scissors.style.bottom = null;
        scissors.style.left = null;
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
computerChoice(computerChance,userChance,null,'ordi gagne','vous gagne','match null');

    }
    /**
     *
     * stone function
     * @return user choice onclick
     *
     * */
    var stone = function () {
        leaf.style.bottom = null;
        leaf.style.left = null;
        scissors.style.bottom = null;
        scissors.style.left = null;
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
computerChoice(userChance,null,computerChance,'vous gagne','match null','ordi gagne');

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


