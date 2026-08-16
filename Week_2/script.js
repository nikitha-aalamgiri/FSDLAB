const quiz = [
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "Which HTML tag is used to insert an image?",
        options: ["<image>", "<pic>", "<img>", "<src>"],
        answer: "<img>"
    },
    {
        question: "Which CSS property is used to change the text color?",
        options: ["font-color", "text-color", "color", "background-color"],
        answer: "color"
    },
    {
        question: "Which CSS property is used to change the background color?",
        options: ["bg-color", "background-color", "color", "background"],
        answer: "background-color"
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<li>", "<ul>", "<list>"],
        answer: "<ul>"
    }
];

let index = 0;
let score = 0;
let time = 250;

const question = document.getElementById("question");
const options = document.getElementById("options");
const result = document.getElementById("result");

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(quiz);

quiz.forEach(q => {
    shuffle(q.options);
});

function loadQuestion() {
    question.innerHTML = quiz[index].question;
    options.innerHTML = "";

    quiz[index].options.forEach(option => {
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "ans";
        input.value = option;

        const label = document.createElement("label");
        label.textContent = option;

        options.appendChild(input);
        options.appendChild(label);
        options.appendChild(document.createElement("br"));
    });
}

function nextQuestion() {
    const selected = document.querySelector('input[name="ans"]:checked');

    if (selected && selected.value === quiz[index].answer) {
        score++;
    }

    index++;

    if (index < quiz.length) {
        loadQuestion();
    } else {
        result.innerHTML = "Your Score: " + score + "/" + quiz.length;
        question.innerHTML = "";
        options.innerHTML = "";
    }
}

loadQuestion();

setInterval(function() {
    time--;
    document.getElementById("timer").innerHTML = "Time: " + time;

    if (time === 0) {
        result.innerHTML = "Time Over! Score: " + score + "/" + quiz.length;
        question.innerHTML = "";
        options.innerHTML = "";
    }
}, 1000);