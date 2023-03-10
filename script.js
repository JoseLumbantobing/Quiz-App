const quizData = [
    {
        question : 'Inside which HTML element do we put the JavaScript?',
        a : '<js>',
        b : '<script>',
        c : '<scripting>',
        d : '<javascript>',
        correct : 'b',
    },
    {
        question : 'Where is the correct place to insert a JavaScript?',
        a : '<head>',
        b : '<body>',
        c : '<footer>',
        d : 'both <head> and <body> are correct',
        correct : 'd',
    },
    {
        question : 'What is the correct syntax for referring to an external script called "xxx.js"?',
        a : '<script href="xxx.js">',
        b : '<script name="xxx.js">',
        c : '<script src=="xxx.js">',
        d : '<script target="xxx.js">',
        correct : 'c',
    },
    {
        question : 'How do you write "Hello World" in an alert box?',
        a : 'msg("Hello World");',
        b : 'alert("Hello World");',
        c : 'alertBox("Hello World");',
        d : 'msgBox("Hello World");',
        correct : 'b',
    },
    {
        question : 'How do you create a function in JavaScript?',
        a : 'function myFunction()',
        b : 'function = myFunction()',
        c : 'function:myFunction()',
        d : 'func myFunction()',
        correct : 'a',
    },
];

const container = document.querySelector('.container');
const answers = document.querySelectorAll('.answer');
const question = document.querySelector('.question');
const aText = document.getElementById('a-text');
const bText = document.getElementById('b-text');
const cText = document.getElementById('c-text');
const dText = document.getElementById('d-text');
const button = document.querySelector('.btn');

let currentQuiz = 0;
let score = 0;

const takeQuiz = () => {
    resetChoices();

    const quizzes = quizData[currentQuiz];
    question.innerText = quizzes.question;
    aText.innerText = quizzes.a;
    bText.innerText = quizzes.b;
    cText.innerText = quizzes.c;
    dText.innerText = quizzes.d;
}

const correctChoice = () => {
    let correct = undefined;
    answers.forEach(answer => {
        if(answer.checked) {
            correct = answer.id;
        }
    });
    return correct;
}

const resetChoices = () => {
    answers.forEach(answer => {
        answer.checked = false;
    });
}

const nextQuiz = () => {
    button.addEventListener('click', () => {
        const result = correctChoice();
        if (result === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length) {
            takeQuiz();
        } else {
            container.innerHTML = `
            <h2>You've finished the quiz. You are correct ${score} out of 5 questions!</h2>
            <button class="retake">Retake Quiz</button>
            `

            const retake = document.querySelector('.retake');
            retake.addEventListener('click', () => {
                // Javascript method to reload the page
                location.reload();
            });
        }
    });
}

takeQuiz();

nextQuiz();