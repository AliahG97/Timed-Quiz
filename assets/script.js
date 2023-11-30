document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');//add function to the start button//
    var timerDisplay = document.getElementById('timerDisplay');//display the timer upon click//
    var header = document.querySelector('.flex-container');//header containing the timer and view high score link//
    var mainSection = document.querySelector('main');//testing if any triggers will work upon click for example change bg color of main//

    var timerInterval;
    var seconds = 0;


    function startTimer() { //set timer to increase by 1 second every 1000 miliseconds after statr buton is clicked//
        timerInterval = setInterval(function () {
            seconds++;
            timerDisplay.textContent = formatTime(seconds);
        }, 1000);
    }

    function formatTime(time) { //converting minutes into seconds to display//
        var minutes = Math.floor(time / 60);
        var remainingSeconds = time % 60;
        return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    startButton.addEventListener('click', function () {
        startTimer();
        header.style.display = 'flex'; //display timer and view-highscore text at the top of the page on click//
        mainSection.style.display = 'none'; //make background deep pink on click//
        document.body.style.backgroundColor = 'deeppink'; //make background deep pink on click//
    });
        //var answersElementList = document.querySelector ('answersListElement');//display Question object and display all indexes in the array of each object/question.//
        //var answerListElement = [
        //     "Commonly used data types do not include what?": ["strings", "booleans", "alerts", "number"],
        //     "The condition in an if/else statement is enclosed with what?": ["quotes", "curly braces", "parentheses", "square brackets"],
        //     "Arrays in JavaScript can be used to store what?": ["numbers and strings", "other arrays", "booleans", "all of the above"],
        //     "String values must be enclosed within what when being assigned to variables?": ["JavaScript", "terminal/bash", "quotes", "curly braces"],
        //     "A very useful tool used during development and debugging for printing content to the debugger is what?": ["JavaScript", "terminal/bash", "for loops", "console.log"]
        // ];
        // var questionIndex = 0;

        // function displayQuestions(index) {
        //     var questionElement = document.querySelector('.questions');
        //     var answerElement = document.createElement('ol');

        //     var currentQuestion = Object.keys(displayQuestions)[index];
        //     var currentAnswer = displayQuestions[currentQuestion];

        //     questionElement.textContent = currentQuestion;

        //     currentAnswer.forEach(answer => {
        //         var answerItem = document.createElement('li');
        //         answerItem.textContent = answer;
        //         answerElement.appendChild(answerItem);
        //     });

        //     page1.style.display = 'none';
        //     timer.style.display = 'flex';
        //     headerText.forEach(element => {
        //         element.style.display = 'flex';
        //     });
        //     questionElement.classList.add('questions');
        //     page1.parentNode.insertBefore(questionElement, page1.nextSibling);
        //     questionElement.style.display = 'flex';

        //     var answerBtns = document.createElement('ol');
        //     answerBtns.classList.add('class-answer-btns');
        //     answerBtns.style.display = 'flex';

        //     currentAnswer.forEach(answer => {
        //         var answerItem = document.createElement('li');
        //         answerItem.textContent = answer;
        //         answerBtns.appendChild(answerItem);
        //     });

        //     page1.parentNode.insertBefore(answerBtns, questionElement.nextSibling);
        // }
        // function startQuiz() {
        //     displayQuestions(0);
        //     startButton.removeEventListener('click',startQuiz);
        //     startButton.addEventListener('click',function () {
        //         questionIndex++;
        //         if (questionIndex < Object.keys(displayQuestions).length) {
        //             displayQuestions(questionIndex);
        //         } else { 
        //             console.log('All Questions Displayed')    
        //         }
        //     });
        // }
    });