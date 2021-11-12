// Game values
let min = 1,
    max = 10,
    winningNum = getRandomNum(max,min),
    guessesLeft = 4;
    



    // UI ELEMENTS
const game = document.querySelector('#game'),
    minNum =       document.querySelector('.min-num'),
    maxNum =       document.querySelector('.max-num'),
     guessBtn =       document.querySelector('#guess-btn'),
    guessInput =       document.querySelector('#guess-input');

    // assign UI minimum and maximum
    minNum.textContent = min;
    maxNum.textContent = max;

  //add play-again event
  game.addEventListener('mousedown', function(e) {
      if(e.target.className === 'play-again') {
          window.location.reload();
      }
  });
    // listen for button
     guessBtn.addEventListener('click', function() {
        let guess = parseInt(guessInput.value);

        // validate
        if(isNaN(guess) || guess < min || guess > max) {
            setMessage(`Please enter a number between ${min} and ${max}`,'red')
        }

        // check if won
        else if(guess === winningNum) {
             console.log('green')
            gameOver( true,  `${winningNum} is correct! YOU WIN!` );
        } 
        else  {
            //wrong number
            guessesLeft -= 1
            if(guessesLeft === 0 ) {
            
            gameOver( false, ` Game over, you lost. The correct number is ${winningNum}`)

            } else if (guessesLeft === 1) {
                guessInput.value = '';
                setMessage(`${guess} is not correct, a guess left`, 'red')
            }
            
            else {
                //game continues - wrong ans
                guessInput.style.borderColor = 'red'
                guessInput.value = '';
                setMessage(`${guess} is not correct, ${guessesLeft} guesses left `, 'red')
            }
        }
    });

    function gameOver(won, msg) {
        let color;
        won === true ? color = 'green' : color = 'red';
        // disable input
        guessInput.disabled = true;
        // change border color
        guessInput.style.borderColor = color;
        //change text color
        message.style.color = color;
        setMessage(msg);

        //play again
        guessBtn.value = 'Play Again'
        guessBtn.className = 'play-again'

    }
    //get random num
    function getRandomNum(max,min) {
      return(Math.floor(Math.random()*(max-min + 1) + min))
    }

    // set message

    setTimeout(setMessage , 3000);

    function setMessage(msg,color) {
        message.style.color = color;
        message.textContent  = msg;
    }