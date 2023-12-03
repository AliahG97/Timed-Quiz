document.addEventListener('DOMContentLoaded', function () {
    var startButton = document.getElementById('startButton');//add function to the start button//
    var header = document.querySelector('.flex-container');//header containing the timer and view high score link//
    var mainSection = document.querySelector('main');//testing if any triggers will work upon click for example change bg color of main//
    var questionAnswersList = document.querySelector('.questionAnswersList');
    var questionIndex = 0;
    // var timerDisplay = document.getElementById('timerDisplay');//display the timer upon click//
    function displayQuestions(index) {
        var questionElement = document.querySelector('.question');
        var currentQuestion = answerListElement[index].question;
        var currentAnswer = answerListElement[index].answers;
        
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

                } else { 
                    resultDisplay.textContent ='Wrong!';
                    questionAnswersList.appendChild(resultDisplay);
                
                }  
                
                var existingResult = document.querySelector('.result');
                if (existingResult) {
                existingResult.remove();
                }          
                
                questionAnswersList.appendChild(resultDisplay);

                if (clickedIndex === correctAnswerIndex) {
                    setTimeout(function () {
                        questionIndex++;
                        if (questionIndex < answerListElement.length) {
                                displayQuestions(questionIndex);
                        } else {
                            console.log('AllQuestions Displayed')
                        }
                    }, 1000);
                }
            });
        });
    }
    // questionAnswersList.appendChild(resultDisplay);
    
    
    startButton.addEventListener('click', function () {
            // startTimer();//Start the timer
        header.style.display = 'flex'; //display timer and view-highscore text at the top of the page on click//
        mainSection.style.display = 'none'; //make background deep pink on click//
        displayQuestions(questionIndex);
    });
    
    // var questionAnswersList = document.querySelector ('.questionAnswersList');//display Question object and display all indexes in the array of each object/question.//
    
    var answerListElement = [
        {question:"1.Commonly used data types do not include _____." , answers:["strings", "booleans", "alerts", "number"], answerEl: 2},
        {question:"2.The condition in an if/else statement is enclosed within _____?" , answers:["quotes", "curly braces", "parentheses", "square brackets"],answerEl:2},
        {question:"3.Arrays in JavaScript can be used to store _____?" , answers: ["numbers and strings", "other arrays", "booleans", "all of the above"],answerEl:3},
        {question:"4.String values must be enclosed within _____ when being assigned to variables?" , answers: ["JavaScript", "terminal/bash", "quotes", "curly braces"],answerEl:2},
        {question:"5.A very useful tool used during development and debugging for printing content to the debugger is_____?", answers: ["JavaScript", "terminal/bash", "for loops","console.log"],answerEl:3}
    ];
});
        

    
// function displayQuestions(index) {
    //     var questionElement = document.querySelector('.questions');
    //     var answerEl = document.createElement('ol');
        
    //     var currentQuestion = answerListElement[index].question;
    //     var currentAnswer = answerListElement[index].answers;
    //     questionElement.textContent = currentQuestion;
        
    //     var resultDisplay = document.createElement('p');
    //     resultDisplay.classList.add('result');

    //     var questionAnswersList =document.querySelector('.questionAnswersList');
    //     questionAnswersList.innerHTML = '';

    // function displayNextQuestion() {
    //     setTimeout(function () {
    //         questionIndex++;
    //         if(questionIndex < answerListElement.length) {
    //             displayQuestions(questionIndex);
    //         } else {
    //             console.log('All Questions Displayed');                           
    //             }
    //         },3000);

//         }
//             });
//         });    
//     }    
// })

    
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