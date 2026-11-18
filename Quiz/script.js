let questions = [

    {
        question: "1. Which language is used for web development?",
        options: ["Java", "HTML", "Python", "C++"],
        answer: "HTML"
    },

    {
        question: "2. Which language is used for styling web pages?",
        options: ["CSS", "Java", "C", "Python"],
        answer: "CSS"
    },

    {
        question: "3. Which language makes web pages interactive?",
        options: ["HTML", "CSS", "JavaScript", "SQL"],
        answer: "JavaScript"
    },

    {
        question: "4. Which tag is used to create a paragraph?",
        options: ["<h1>", "<p>", "<br>", "<div>"],
        answer: "<p>"
    },

    {
        question: "5. Which method selects an element by ID?",
        options: [
            "getElementById()",
            "getElement()",
            "queryId()",
            "selectId()"
        ],
        answer: "getElementById()"
    }

];

let currentQuestion = 0;
let score = 0;

let questionElement = document.getElementById("question");
let optionButtons = document.querySelectorAll(".option");

function showQuestion() {

    let q = questions[currentQuestion];

    questionElement.innerText = q.question;

    optionButtons.forEach(function(button, index) {

        button.innerText = q.options[index];

        button.disabled = false;

        button.className = "option";

        button.onclick = function() {

            checkAnswer(button, q.answer);

        };

    });

}

function checkAnswer(button, answer) {

    optionButtons.forEach(function(btn) {

        btn.disabled = true;

        if (btn.innerText === answer) {
            btn.classList.add("correct");
        }

    });

    if (button.innerText === answer) {

        score++;

    } else {

        button.classList.add("wrong");

    }

}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

}

function showResult() {

    questionElement.innerText = "Quiz Completed!";

    document.getElementById("options").style.display = "none";

    document.getElementById("nextBtn").style.display = "none";

    document.getElementById("result").innerText =
        "Your Score: " + score + " / " + questions.length;

    document.getElementById("restartBtn").style.display = "inline-block";

}

function restartQuiz() {

    currentQuestion = 0;

    score = 0;

    document.getElementById("options").style.display = "block";

    document.getElementById("nextBtn").style.display = "inline-block";

    document.getElementById("result").innerText = "";

    document.getElementById("restartBtn").style.display = "none";

    showQuestion();

}

// Display first question
showQuestion();