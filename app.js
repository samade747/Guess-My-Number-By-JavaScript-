let secretNumber = Math.ceil(Math.random() * 20) + 1;
let userInput = document.getElementById('userinput');
let remarks = document.getElementById('remarks');
let score = 20;
let highscore = 0;


function answercheckhandler(){
    let guess = +(userInput.value);
    let result = guess === secretNumber ? `congraulations You guess the Correct` : guess > secretNumber ? 'Too High!' : 'Too low!';
    
    remarks.innerHTML = result
    if(guess === secretNumber && score > highscore){
        highscore = score;
        document.getElementById('Highscore').innerHTML = `HighScore!: ${highscore}`

    }
    score = guess === secretNumber ? 20 : score - 1 ;
    document.getElementById('result').innerHTML = `Score: ${score}`;
    userInput.value = '';

}

