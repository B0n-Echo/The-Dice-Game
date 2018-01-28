/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScores, activePlayer, gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click', rollDice);

function rollDice() {

        if (gamePlaying) {

                var dice = Math.floor(Math.random() * 6 + 1);

                diceDom = document.querySelector('.dice');
                diceDom.style.display = 'block';
                diceDom.src = 'dice-' + dice + '.png';

                if (dice !== 1) {
                        roundScores += dice;
                        document.querySelector('#current-' + activePlayer).textContent = roundScores;


                } else {
                        nextPlayer();

                }

        }
}

document.querySelector('.btn-hold').addEventListener('click', holdButton);

function holdButton() {

        if (gamePlaying) {
                scores[activePlayer] += roundScores;

                document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

                if (scores[activePlayer] >= 50) {
                        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
                        document.querySelector('.dice').style.display = 'none';
                        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
                        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
                        gamePlaying = false;
                } else {
                        //Next player
                        nextPlayer();
                }

        }

}

function nextPlayer() {
        //Next player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        //document.querySelector('.player-0-panel').classList.remove('active');
        //document.querySelector('.player-1-panel').classList.add('active');

        document.querySelector('.dice').style.display = 'none';
}


document.querySelector('.btn-new').addEventListener('click', init);

function init() {
        scores = [0, 0];
        activePlayer = 0;
        roundScores = 0;
        winningScore = 0;
        gamePlaying = true;
        document.querySelector('.dice').style.display = 'none';
        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';
        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');

        if (winningScore == 0) {
                var modal = document.getElementById('myModal');
                var span = document.getElementsByClassName("close")[0];
                
                modal.style.display = "block";
        
                // When the user clicks on <span> (x), close the modal
                span.onclick = function () {
                        modal.style.display = "none";
                }
        
                // When the user clicks anywhere outside of the modal, close it
                window.onclick = function (event) {
                        if (event.target == modal) {
                                modal.style.display = "none";
                        }
                }
        }


}