document.addEventListener('DOMContentLoaded', function () {
    //Variables to store elements and data.
    var startButton = document.getElementById('startButton');//add function to the start button//
    var header = document.querySelector('.flex-container');//header containing the timer and view high score link//
    var mainSection = document.querySelector('main');//testing if any triggers will work upon click for example change bg color of main//
    var questionAnswersList = document.querySelector('.questionAnswersList');//List of questions and answers.
    var questionIndex = 0;//index to track current question.
    var timerDisplay = document.getElementById('timerDisplay');//display the timer upon click//
    var timerInterval;//interval to update timer. 
    var seconds = 0;//timer in seconds.

    //
    var allDoneElement = document.querySelector('.allDone')
    var submitButton = document.getElementById('submitButton');
    var handleBackButton = document.querySelector('back-btn');
    var backButtonEl = document.getElementById('backButton');
    var clearButtonEl = document.getElementById('clearButton');
    var allScoresElement = document.getElementById('highscores');
    var highscoresElement = document.getElementById('viewHighscores');

    //Elements for all done and high scores. function to handle 'button' click (not working).
    var handleBackButton =  function() {
        if (highscoresElement && allDoneElement) {
            highscoresElement.style.display = 'flex';
            allDoneElement.style.display = 'none';   
            displayHighscores();
        } else {
            console.log.error("cannot find elements");
        }
    };

    //Function to handle 'View Highscores' click.
    var handleViewHighscores = function() {
        if (highscoresElement && allDoneElement) {
            highscoresElement.style.display = 'flex';
            allDoneElement.style.display = 'none';  
            displayHighscores(); 
        } else {
            console.error("cannot find elements");
        }
    };
    // Event listeners for submit, back and view highscores buttons
    submitButton.addEventListener('click', handleSubmit);
    backButtonEl.addEventListener('click', handleBackButton);
    var viewHighscores = document.getElementById('viewHighscores');
    if(viewHighscores) {
        viewHighscores.addEventListener('click', handleViewHighscores);
    }  

    //Function to handle form submission for high scores
    function handleSubmit() {
        // handling form submission for high scores.   
        var initials = document.getElementById('initialsInput').value;
        var existingHighscores = JSON.parse(localStorage.getItem('highscores')) || [];
        var newScore = { initials: initials, score: seconds };
        
        existingHighscores.push(newScore);
        existingHighscores.sort((a, b) => a.score -b.score);
        
        localStorage.setItem('highscores', JSON.stringify(existingHighscores));
        //Display high scores and hide elements.
        var allDoneElement = document.querySelector('.allDone');
        allDoneElement.style.display = 'none';
        
        var highscoresElement = document.querySelector('.highscores');
        highscoresElement.style.display = 'flex';
        
        var hsElement = document.querySelector('.hs');
        hsElement.style.display = 'block';
        
        var backBtn = document.querySelector('.back-btn');
        backBtn.style.display = 'block';
        var clearBtnEl = document.querySelector('.clear-btn');
        clearBtnEl.style.display = 'block';
        displayHighscores();//Display high scores.
        hideListMarkers();//Hide list markers

    }

    //Function to display high scores
    function displayHighscores() {
        //Retrieve high scores from local storage
        var highscores = JSON.parse(localStorage.getItem('highscores')) || [];
        //Display high scores. or no high scores message.
        if (highscores.length > 0 ) {
            var ol = document.createElement('ol');
            highscores.forEach(function (score, index) {
                var li = document.createElement('li');
                li.textContent = `${index + 1}. ${score.initials} - ${score.score}`;
                ol.appendChild(li);
            });
            allScoresElement.innerHTML = '';
            allScoresElement.appendChild(ol);
        } else { 
            allScoresElement.innerHTML = '<p>No highscores yet!</p>';
        }
        allScoresElement.style.display = 'flex';
    }

    //Function to clear high scores.
    clearBtnEl = document.querySelector('.clear-btn');
    clearBtnEl.addEventListener('click', function () {
        localStorage.removeItem('highscores');
        allScoresElement.innerHTML = '<p>No highscores yet!</p>';
    });
    allScoresElement.style.display = 'flex';
    
    //Function to hide list markers.
    function hideListMarkers() {
        var listItems = document.querySelectorAll('#highscores ol li');
        listItems.forEach(function (item) {
            item.style.listStyleType = 'none';
        
        });
    }

    //Function to display questions.
    function displayQuestions(index) {
        //Display
        var questionElement = document.querySelector('.question');
        var currentQuestion = answerListElement[index].question;
        var currentAnswer = answerListElement[index].answers;

        if (index === 0) {
            startTimer(); // start the timer when displaying the first question
        }
        
        questionElement.textContent = currentQuestion;
        questionAnswersList.innerHTML ='';
        
        currentAnswer.forEach((answer, idx) => {
            var answerItem = document.createElement('li');
            answerItem.textContent = `${idx + 1}. ${answer}`;
            answerItem.classList.add('answer-btn');
            questionAnswersList.appendChild(answerItem);
            
         //  Event listener for selections. 
        answerItem.addEventListener('click', function (event) {
            var clickedIndex = idx;
            var correctAnswerIndex = answerListElement[questionIndex].answerEl;
            var resultDisplay = document.createElement('p');
            resultDisplay.classList.add('result');   

            //Check if the selected answer is correct.
            if (clickedIndex === correctAnswerIndex) {
                resultDisplay.textContent ='Correct!';
                questionAnswersList.appendChild(resultDisplay);
                
                // Go to the next question or finish the quiz.
                if (questionIndex === answerListElement.length - 1) {
                    setTimeout(function () {
                        var finalScoreElement = document.getElementById('finalScore');
                        finalScoreElement.textContent = seconds;

                        questionIndex++;
                        document.querySelector('.question').style.display = 'none';
                        var allDoneElement = document.querySelector('.allDone')
                        allDoneElement.style.display = 'flex';
                        document.querySelector('.questionAnswersList').style.display = 'none';
                        clearInterval(timerInterval);    
                    },1000);         
            // if (clickedIndex === correctAnswerIndex) {
                } else {        
                    setTimeout(function () {
                        questionIndex++;
                        if (questionIndex < answerListElement.length) {
                            displayQuestions(questionIndex);
                        } else {
                            console.log('AllQuestions Displayed')
                        }
                    }, 1000);
                }
            } else {
                // if wrong answer is clicked 
                resultDisplay.textContent ='Wrong!';
                questionAnswersList.appendChild(resultDisplay);
                seconds +=10;
                timerDisplay.textContent = formatTime(seconds);
                }
                var existingResult = document.querySelector('.result');
                if (existingResult) {
                existingResult.remove();
            }
            questionAnswersList.appendChild(resultDisplay);
        });
    });
}
    //Create timer going up by 1 second and display the timer in seconds,
    function startTimer() {
        timerInterval = setInterval(function () {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
        if (questionIndex === answerListElement.length) {
            //stop timer aka clear interval
            clearInterval(timeInterval);
            //set each highscore in seconds as items stored in the local storage
            localStorage.setItem('YourTimeKey',seconds);
    
        }    
    }    
    //calculating time seconds per minute
    function formatTime(time) {
        var minutes =Math.floor(time /60);
        var remainingSeconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
    //listen for start button to be clicked
    startButton.addEventListener('click', function () {
        header.style.display = 'flex'; //display timer and view-highscore text at the top of the page on click//
        mainSection.style.display = 'none'; //make background deep pink on click//
        displayQuestions(questionIndex);
    });
    
    //The list  of objects which contain arrays of strings with the question, their possible answers, and correct answerEl)
    var answerListElement = [
        {question:"1.Commonly used data types do not include _____." , answers:["strings", "booleans", "alerts", "number"], answerEl: 2},
        {question:"2.The condition in an if/else statement is enclosed within _____?" , answers:["quotes", "curly braces", "parentheses", "square brackets"],answerEl:2},
        {question:"3.Arrays in JavaScript can be used to store _____?" , answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],answerEl:3},
        {question:"4.String values must be enclosed within _____ when being assigned to variables?" , answers: ["JavaScript", "terminal/bash", "quotes", "curly braces"],answerEl:2},
        {question:"5.A very useful tool used during development and debugging for printing content to the debugger is_____?", answers: ["JavaScript", "terminal/bash", "for loops","console.log"],answerEl:3}
    ];
});
