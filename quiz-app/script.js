const quizData = [
    {
        question : "How old is Messi?",
        a : "16",
        b : "25",
        c : "33",
        d : "40",
        correct : "c",
    },
    {
        question : "How old is Ronaldo?",
        a : "18",
        b : "35",
        c : "33",
        d : "39",
        correct : "b",
    },
    {
        question : "How Many golden ball has Messi?",
        a : "5",
        b : "6",
        c : "0",
        d : "4",
        correct : "b",
    }
]

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

laodQuiz();

function getSelected () {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}
function deselectAnswers(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}

function laodQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
}

submitBtn.addEventListener("click",()=>{
    const answer = getSelected();
    if (answer) {
        if (answer==quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;  
        if (currentQuiz < quizData.length) {
            laodQuiz();
        } else {
            quiz.innerHTML = 
                `<h2>You answered 
                correctly at ${score}/${quizData.length} 
                questions. </h2> 
                <button onclick = "location.reload()">
                Reload</button>`;
        }
    }
})