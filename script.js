// these will be all the called variables
var quizBody = document.getElementById("quiz");
var resultsEl = document.getElementById("result");
var finalScoreEl = document.getElementById("finalScore");
var gameoverDiv = document.getElementById("gameover");
var questionsEl = document.getElementById("questions");
var quizTimer = document.getElementById("timer");
var startQuizButton = document.getElementById("startbtn");
var startQuizDiv = document.getElementById("startpage");
var highscoreContainer = document.getElementById("highscoreContainer");
var highscoreDiv = document.getElementById("high-scorePage");
var highscoreInputName = document.getElementById("initials");
var highscoreDisplayName = document.getElementById("highscore-initials");
var endGameBtns = document.getElementById("endGameBtns");
var submitScoreBtn = document.getElementById("submitScore");
var highscoreDisplayScore = document.getElementById("highscore-score");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");


// these will be the questions and correct answers to the quiz
var quizQuestion = [
    {
    question: "How many CSS properties can be in one stylesheet?",
    choiceA: "1",
    choiceB: "2",
    choiceC: "228",
    choiceD: "None of The Above",
    correctanswer: "c"},
   {
    question: "How many Javascrpit Arithmetic Operators are there?",
    choiceA: "2",
    choiceB: "8",
    choiceC: "4",
    choiceD: "9",
    correctanswer: "b"}, 
   {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
   {
    question: "What does CSS stand for?",
    choiceA: "Colorful Stlye Sheet",
    choiceB: "Computer Style Sheet",
    choiceC: "Creative Style Sheet",
    choiceD: "Cascading Style Sheet",
    correctAnswer: "d"},
   {
    question: "Where in an HTML document is the correct place to refer to an external style sheet?",
    choiceA: "In the end of the document",
    choiceB: "In the body section",
    choiceC: "In the head section",
    choiceD: "In the body section",
    correctAnswer: "c"},
   {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "js",
    choiceB: "script",
    choiceC: "javascript",
    choiceD: "scripting",
    correctAnswer: "b"},

    ];

// these will be more global variables
var finalQuestionIndex = quizQuestion.length;
var currentQuestionIndex = 0;
var timeleft = 76;
var timerInterval;
var score = 0;
var correct;


// this function will cycle though the objects with the questions
function generateQuizQuestion(){
    gameoverDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex){
        return showScore();
    } 
    var currentQuestion = quizQuestion[currentQuestionIndex];
    questionsEl.innerHTML = "<p>" + currentQuestion.question + "</p>";
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
};

// Start Quiz function starts the TimeRanges, hides the start button, and displays the first quiz question.
function startQuiz(){
    gameoverDiv.style.display = "none";
    startQuizDiv.style.display = "none";
    generateQuizQuestion();

    //Timer
    timerInterval = setInterval(function() {
        timeleft--;
        quizTimer.textContent = "Time left: " + timeleft;
    
        if(timeleft === 0) {
          clearInterval(timerInterval);
          showScore();
        }
      }, 1000);
    quizBody.style.display = "block";
}
// This function is the end page screen that displays your score after either completeing the quiz or upon timer run out
function showScore(){
    quizBody.style.display = "none"
    gameoverDiv.style.display = "flex";
    clearInterval(timerInterval);
    highscoreInputName.value = "";
    finalScoreEl.innerHTML = "You got " + score + " out of " + quizQuestion.length + " correct!";
}

submitScoreBtn.addEventListener("click", function highscore(){
    
    if(highscoreInputName.value === ""){
        alert("Cannot Be Left Blank");
        return false;
    }else{
        var savedHighscores = json.parse(localStorage.getItem("savedHighscores")) || [];
        var currentUser = highscoreInputName.value.trim();
        var currentHighscore = {
            name: currentUser,
            score : score
        };
        gameoverDiv.style.display = "none";
        highscoreContainer.stlye.display = "flex";
        highscoreDiv.style.display = "block";
        endGameBtns.style.display = "flex",

        savedHighscores.push(currentHighscore);
        localStorage.setItem("savedHighscores", json.stringify(savedHighscores));
        generateHighscores();

    }

});

function generateHighscores(){
    highscoreDisplayName.innerHTML = "";
    highscoreDisplayScore.innerHTML = "";
    var highscore = json.parse(localStorage.getItem("savedHighscores")) [];
    for (i=0; i<highscores.length; i++){
        var newNameSpan = document.createElement("li");
        var newScoreSpan = document.createElement("li");
        newNameSpan.textContent = highscores[i].name;
        newScoreSpan.textContent = highscores[i].score;
        highscoreDisplayName.appendChild(newNameSpan);
        highscoreDisplayScore.appendChild(newScoreSpan);
    }

}









startQuizButton.addEventListener("click",startQuiz);