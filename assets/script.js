document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');//add function to the start button//
    var header = document.querySelector('.flex-container');//header containing the timer and view high score link//
    var mainSection = document.querySelector('main');//testing if any triggers will work upon click for example change bg color of main//
    var questionAnswersList = document.querySelector('.questionAnswersList');
    var questionIndex = 0;
    var timerDisplay = document.getElementById('timerDisplay');//display the timer upon click//
    var timerInterval;
    var seconds = 0;
    
    function displayQuestions(index) {
        var questionElement = document.querySelector('.question');
        var currentQuestion = answerListElement[index].question;
        var currentAnswer = answerListElement[index].answers;

        if (index === 0) {
            startTimer();
        }
        
        questionElement.textContent = currentQuestion;
        questionAnswersList.innerHTML ='';
        
        currentAnswer.forEach((answer, idx) => {
            var answerItem = document.createElement('li');
            answerItem.textContent = `${idx + 1}. ${answer}`;
            answerItem.classList.add('answer-btn');
            questionAnswersList.appendChild(answerItem);
            
            
            answerItem.addEventListener('click', function (event) {
                var clickedIndex = idx;
                var correctAnswerIndex = answerListElement[questionIndex].answerEl;
                var resultDisplay = document.createElement('p');
                resultDisplay.classList.add('result');   


                if (clickedIndex === correctAnswerIndex) {
                    resultDisplay.textContent ='Correct!';
                    questionAnswersList.appendChild(resultDisplay);
                        
                    if (questionIndex === answerListElement.length - 1) {
                        setTimeout(function () {
                            questionIndex++;
                            document.querySelector('.question').style.display = 'none';
                            var allDoneElement = document.querySelector('.allDone')
                            allDoneElement.style.display = 'flex';
                            document.querySelector('.questionAnswersList').style.display = 'none';

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
                        resultDisplay.textContent ='Wrong!';
                        questionAnswersList.appendChild(resultDisplay);
                        seconds += 10;
                        updateTimerDisplay ();
                }
                var existingResult = document.querySelector('.result');
                if (existingResult) {
                    existingResult.remove();
                }
                questionAnswersList.appendChild(resultDisplay);
            });
        });
    }

    function startTimer() {
        timerInterval = setInterval(function () {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
    }    

    function formatTime(time) {
        var minutes =Math.floor(time /60);
        var remainingSeconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    function updateTimerDisplay () {
        timerDisplay.textContent = formatTime(seconds)

    }
    startButton.addEventListener('click', function () {
        startTimer();//Start the timer
        header.style.display = 'flex'; //display timer and view-highscore text at the top of the page on click//
        mainSection.style.display = 'none'; //make background deep pink on click//
        displayQuestions(questionIndex);
    });
    
    
    var answerListElement = [
        {question:"1.Commonly used data types do not include _____." , answers:["strings", "booleans", "alerts", "number"], answerEl: 2},
        {question:"2.The condition in an if/else statement is enclosed within _____?" , answers:["quotes", "curly braces", "parentheses", "square brackets"],answerEl:2},
        {question:"3.Arrays in JavaScript can be used to store _____?" , answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],answerEl:3},
        {question:"4.String values must be enclosed within _____ when being assigned to variables?" , answers: ["JavaScript", "terminal/bash", "quotes", "curly braces"],answerEl:2},
        {question:"5.A very useful tool used during development and debugging for printing content to the debugger is_____?", answers: ["JavaScript", "terminal/bash", "for loops","console.log"],answerEl:3}
    ];
    });    
