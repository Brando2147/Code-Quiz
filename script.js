
$(document).ready(function () {


    // Selecting elements 
    var secondsDisplay = document.querySelector("#seconds");
    var beginBtn = document.getElementById("begin");
    var landing = document.getElementById("landing");
    var home = document.getElementById("home");
    var choices = document.getElementById("choices");
    var questionNumber = document.querySelector(".question-number");
    var choiceA = document.getElementById("ChoiceA");
    var choiceB = document.getElementById("ChoiceB");
    var choiceC = document.getElementById("ChoiceC");
    var choiceD = document.getElementById("ChoiceD");
    var optA = document.getElementById("optA")
    var optB = document.getElementById("optB")
    var optC = document.getElementById("optC")
    var optD = document.getElementById("optD")
    var qCard = document.querySelector(".qCard");
    var final = document.getElementById("final");
    var h2 = document.getElementById("h2");
    qCard.setAttribute("style", "display:none");




    // Declaring global variables 
    var totalSeconds = 0;
    var secondsElapsed = 0;
    var currentQuestion = 0;
    var userScore = 0;
    var interval;



    let quizQuestions = [
        {
            number: "Question #1",
            question: "Which of the following IS NOT a built in Javascript function",
            choices: [".trim()", ".double()", ".slice()", ".join()"],
            answer: ".double()"

        },
        {
            number: "Question #2",
            question: "Which statement would you use to check for specific conditions in Javascript?",
            choices: ["Switch", "For", "Select", "If"],
            answer: "If"

        },
        {
            number: "Question #3",
            question: "What Javascript keyword is used to declare a variable?",
            choices: ["let", "create", "for", "if"],
            answer: "let"
        },
        {
            number: "Question #4",
            question: "What syntax is used when invoking a function?",
            choices: ["[]", "{}", "()", "None"],
            answer: "()"

        },
        {
            number: "Question #5",
            question: "Which symbol is NOT used in logical operations?",
            choices: ["&&", "||", "!", "%"],
            answer: "%"

        }];



    // Retrive questions 
    function getQuestion() {

        $(".question-number").text(quizQuestions[currentQuestion].number)
        $(".question-text").text(quizQuestions[currentQuestion].question)
        $('#ChoiceA').text(quizQuestions[currentQuestion].choices[0])
        $('#ChoiceB').text(quizQuestions[currentQuestion].choices[1])
        $('#ChoiceC').text(quizQuestions[currentQuestion].choices[2])
        $('#ChoiceD').text(quizQuestions[currentQuestion].choices[3])
    }




    // Begin button to Display the questions
    function startTest() {
        landing.setAttribute("style", "display:none");
        beginBtn.setAttribute("style", "display:none");
        qCard.setAttribute("style", "display:inline");

        startTimer();
        getQuestion();
    }



    // Gets next question after making a selection
    choices.addEventListener("click", function () {
        currentQuestion++;
        getQuestion();
        validateAnswers();
    })



    // Validating questions 
    function validateAnswers() {

        document.getElementById("ChoiceA").addEventListener("click", function () {

            if (quizQuestions[currentQuestion].answer === optA) {
                userScore++;
            } else {
                secondsElapsed += 10;
            }
        })


        document.getElementById("ChoiceB").addEventListener("click", function () {

            if (quizQuestions[currentQuestion].answer === optB) {
                userScore++;
            } else {
                secondsElapsed += 10;
            }
        })


        document.getElementById("ChoiceC").addEventListener("click", function () {

            if (quizQuestions[currentQuestion].answer === optC) {
                userScore++;
            } else {
                secondsElapsed += 10
            }
        })

        document.getElementById("ChoiceD").addEventListener("click", function () {
            if (quizQuestions[currentQuestion].answer === optD) {
                userScore++;
            } else {
                secondsElapsed += 10
            }
        })


    }



    // Creates countdown interval with timer 
    function startTimer() {
        clearInterval(interval)


        interval = setInterval(everySecond, 1000);
    }


    // Interval by a second 
    function everySecond() {
        secondsElapsed++;
        renderTime();
    }


    // Sets time to 60 seconds 
    function renderTime() {
        var secondsLeft = 60 - secondsElapsed;

        if (secondsLeft < 1 || currentQuestion > 5) {
            clearInterval(interval)
            qCard.setAttribute("style", "display:none");
            secondsDisplay.setAttribute("style", "display:none");
            landing.setAttribute("style", "display:none");

        }


        secondsDisplay.textContent = secondsLeft;

    }


    // Ends the timer 
    function stopTime() {
        clearInterval(interval);
    }






    beginBtn.addEventListener("click", startTest);


})

