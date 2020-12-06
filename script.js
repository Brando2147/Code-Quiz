
$(document).ready(function () {


    // Selecting elements 
    var minutesDisplay = document.querySelector("#minutes");
    var secondsDisplay = document.querySelector("#seconds");
    var beginBtn = document.getElementById("begin");
    var landing = document.getElementById("landing");
    var questions = document.getElementById("questions")
    var nextQuestion = document.getElementById("next")
    var home = document.getElementById("home")



    // Declaring global variables 
    var totalSeconds = 0;
    var secondsElapsed = 0;
    var interval;

    let choicesArr = [];
    let quizQuestions = [
        {
            question: "",
            choice: ["", "", "", ""],
            answer: ""

        },
        {
            question: "",
            options: ["", "", "", ""],
            answer: ""

        },
        {
            question: "",
            options: ["", "", "", ""],
            answer: ""
        },
        {
            question: "",
            options: ["", "", "", ""],
            answer: ""

        },
        {
            question: "",
            options: ["", "", "", ""],
            answer: ""

        }];




    // Start timer countdown 

    function startTimer() {
        setTime();

        if (totalSeconds > 0) {

            interval = setInterval(function () {
                secondsElapsed++;

                renderTime();
            }, 1000);
        } else {
            alert("Minutes of work/rest must be greater than 0.")
        }
    }


    // Set timer 
    function setTime() {
        var minutes;

        if (status === "Working") {
            minutes = workMinutesInput.value.trim();
        } else {
            minutes = restMinutesInput.value.trim();
        }

        clearInterval(interval);
        totalSeconds = minutes * 60;
    }






    function renderTime() {
        // When renderTime is called it sets the textContent for the timer html...
        minutesDisplay.textContent = getFormattedMinutes();
        secondsDisplay.textContent = getFormattedSeconds();

        // ..and then checks to see if the time has run out
        if (secondsElapsed >= totalSeconds) {
            if (status === "Working") {
                alert("Time for a break!");
            } else {
                alert("Time to get back to work!");
            }

            stopTimer();
        }
    }



    beginBtn.addEventListener("click", startQuiz)

    // Begin button to Display the questions
    function startQuiz() {
        $("#landing").hide();
        $("#begin").hide();
        $("#questions").show();
    }



    home.addEventListener("click", home)

    // Home button to restart quiz 
    function home() {
        $("#landing").show();
        $("#questions").hide();

    }







})
