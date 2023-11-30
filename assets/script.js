document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('start');
    var headerText = document.querySelectorAll('.flex-container ul li');
    var timer = document.querySelector('.timer');
    var page1 = document.getElementById('page1');
    var displayQuestions = {
        "Commonly used data types do not include what?": ["strings", "booleans", "alerts", "number"],
        "The condition in an if/else statement is enclosed with what?": ["quotes", "curly braces", "parentheses", "square brackets"],
        "Arrays in JavaScript can be used to store what?": ["numbers and strings", "other arrays", "booleans", "all of the above"],
        "String values must be enclosed within what when being assigned to variables?": ["JavaScript", "terminal/bash", "quotes", "curly braces"],
        "A very useful tool used during development and debugging for printing content to the debugger is what?": ["JavaScript", "terminal/bash", "for loops", "console.log"]
    };

    var questionIndex = 0;

    function displayQuestions(index) {
        var questionElement = document.querySelector('.questions');
        var answerElement = document.createElement('ol');

        var currentQuestion = Object.keys(displayQuestions)[index];
        var currentAnswer = displayQuestions[currentQuestion];

        questionElement.textContent = currentQuestion;

        currentAnswer.forEach(answer => {
            var answerItem = document.createElement('li');
            answerItem.textContent = answer;
            answerElement.appendChild(answerItem);
        });

        page1.style.display = 'none';
        timer.style.display = 'flex';
        headerText.forEach(element => {
            element.style.display = 'flex';
        });
        questionElement.classList.add('questions');
        page1.parentNode.insertBefore(questionElement, page1.nextSibling);
        questionElement.style.display = 'flex';

        var answerBtns = document.createElement('ol');
        answerBtns.classList.add('class-answer-btns');
        answerBtns.style.display = 'flex';

        currentAnswer.forEach(answer => {
            var answerItem = document.createElement('li');
            answerItem.textContent = answer;
            answerBtns.appendChild(answerItem);
        });

        page1.parentNode.insertBefore(answerBtns, questionElement.nextSibling);
    }
    function startQuiz() {
        displayQuestions(0);
        startButton.removeEventListener('click',startQuiz);
        startButton.addEventListener('click',function () {
            questionIndex++;
            if (questionIndex < Object.keys(displayQuestions).length) {
                displayQuestions(questionIndex);
            } else { 
                console.log('All Questions Displayed')    
            }
        });
    }

    startButton.addEventListener('click', startQuiz);

});