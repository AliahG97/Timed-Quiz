document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');//add function to the start button//
    var header = document.querySelector('.flex-container');//header containing the timer and view high score link//
    var mainSection = document.querySelector('main');//testing if any triggers will work upon click for example change bg color of main//
    // var timerDisplay = document.getElementById('timerDisplay');//display the timer upon click//

    
    startButton.addEventListener('click', function () {
        // startTimer();//Start the timer
        header.style.display = 'flex'; //display timer and view-highscore text at the top of the page on click//
        mainSection.style.display = 'none'; //make background deep pink on click//
        document.body.style.backgroundColor = 'deeppink'; //make background deep pink on click//
        displayQuestions(questionIndex);
    });

    var questionAnswersList = document.querySelector ('.questionAnswersList');//display Question object and display all indexes in the array of each object/question.//

    var answerListElement = [
        {question:"Commonly used data types do not include what?:" , answers:["strings", "booleans", "alerts", "number"], answerEl: 2},
        {question:"The condition in an if/else statement is enclosed with what?:" , answers:["quotes", "curly braces", "parentheses", "square brackets"],answerEl:2},
        {question:"Arrays in JavaScript can be used to store what?:" , answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],answerEl:3},
        {question:"String values must be enclosed within what when being assigned to variables?:" , answers: ["JavaScript", "terminal/bash", "quotes", "curly braces"],answerEl:2},
        {question:"A very useful tool used during development and debugging for printing content to the debugger is what?:", answers: ["JavaScript", "terminal/bash", "for loops","console.log"],answerEl:3},
    ];
        
    var questionIndex = 0;
    
    function displayQuestions(index) {
        var questionElement = document.querySelector('.questions');
        var answerEl = document.createElement('ol');
        
        var currentQuestion = answerListElement[index].question;
        var currentAnswer = answerListElement[index].answers;
        questionElement.textContent = currentQuestion;
     
        
        currentAnswer.forEach((answer, idx) => {
            var answerItem = document.createElement('li');
            answerItem.textContent = answer;
            answerItem.dataset.index = idx;
            questionAnswersList.appendChild(answerItem);

            answerItem.addEventListener('click', function (event) {
                var clickedIndex = parseInt(event.target.dataset.index);
                if (clickedIndex === answerListElement[index].answerEl) {
                    console.log('Correct');
                } else {
                     console.log('Incorrect');
                }            
            });
        });    
    }    
});

    
    // var timerInterval;
    // var seconds = 0;


    // function startTimer() { //set timer to increase by 1 second every 1000 miliseconds after statr buton is clicked//
    //     timerInterval = setInterval(function () {
    //         seconds++;
    //         timerDisplay.textContent = formatTime(seconds);
    //     }, 1000);
    // }

    // function formatTime(time) { //converting minutes into seconds to display//
    //     var minutes = Math.floor(time / 60);
    //     var remainingSeconds = time % 60;
    //     return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    // }
    //---------->this section will turn on the timer<------------
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
        //}
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
    //});