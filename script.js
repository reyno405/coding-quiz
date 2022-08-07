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



var quizQuestion = [{
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
    choiceB: "In the <body> section",
    choiceC: "In the <head> section",
    choiceD: "In the <body> section",
    correctAnswer: "c"},
   {
    question: "Inside which HTML element do we put the JavaScript?",
    choiceA: "<js>",
    choiceB: "<script>",
    choiceC: "<javascript>",
    choiceD: "<scripting>",
    correctAnswer: "b"},
    
];