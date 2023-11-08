let secretNumber = Math.ceil(Math.random() * 20) +1;
let userInput = document.getElementById('userinput');
let remarks = document.getElementById('remarks');
let result = document.getElementById('result');

function answercheckhandler(){
    if (userInput === secretNumber){
        document.getElementById('result').innerHTML = (`<p class="result">Congratulations! You guessed the secret Number: ${secretNumber}</p>`);  
        document.getElementById('result').innerHTML = (`${secretNumber}`);  
    } else {
        document.getElementById('remarks').innerHTML = (`<p class="result">Sorry, the secret number was ${secretNumber}</p>`);

    }
    
}

