'use strict ';
let number = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = number;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no Input
    if (!guess) {
        document.querySelector('.message').textContent = 'Enter Number First';

    }
    //when Player wins
    else if (guess === number) {
        document.querySelector('.number').textContent = number;
        document.querySelector('.message').textContent = 'You Guessed Correct! ';
        document.querySelector('body').style.backgroundColor = '#93C572';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

    }
    //when player guess high number
    else if (guess > number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too High';
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = 'You Lost';
            document.querySelector('.score').textContent = 0;
        }

    }
    //when player guess low number
    else if (guess < number) {
        if (score > 1) {
            document.querySelector('.message').textContent = 'Too Low';
            score--;
            document.querySelector('.score').textContent = score;

        }
        else {
            document.querySelector('.message').textContent = 'You Lost';

        }

    }
});

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    number = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.score').textContent = '20';
    document.querySelector('body').style.backgroundColor = '#222';

    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

});

