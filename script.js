const quizData = [
    {
        question: "Segala sesuatu yang berwujud dan tidak berwujud, serta berguna bagi penelitian sejarah Indonesia sejak zaman purba sampai dengan sekarang. Merupakan pengertian dari...",
        a: "Sejarah",
        b: "Sifat Sejarah",
        c: "Sumber Sejarah",
        d: "Bentuk Sejarah",
        correct: "c",
    },

    {
        question: "Segala sesuatu yang berwujud dan tidak berwujud, serta berguna bagi penelitian sejarah Indonesia sejak zaman purba sampai dengan sekarang. Merupakan pernyataan dari...",
        a: "Moh. Ali",
        b: "Abdul Muis",
        c: "Dr. Sartika",
        d: "S. Soedjojono",
        correct: "a",
    },
    
    {
        question: "Sumber yang didapat dari orang yang mendengar peristiwa tersebut dari orang lain adalah sumber...",
        a: "Primer",
        b: "Sekunder",
        c: "Tersier",
        d: "Kuarter",
        correct: "b",
    },

    {
        question: "Sumber sejarah yang berupa rangkuman tekstual adalah sumber...",
        a: "Primer",
        b: "Sekunder",
        c: "Tersier",
        d: "Kuarter",
        correct: "c",
    },

    {
        question: "Sumber sejarah yang ditulis oleh orang yang mengalami peristiwa secara langsung adalah sumber...",
        a: "Primer",
        b: "Sekunder",
        c: "Tersier",
        d: "Kuarter",
        correct: "a",
    },

    {
        question: "Salah satu kelebihan sifat primer adalah...",
        a: "Mudah diakses",
        b: "Membutuhkan waktu lama",
        c: "Subjektif",
        d: "Objektif",
        correct: "d",
    },

    {
        question: "Salah satu kekurangan sekunder adalah...",
        a: "Sulit diakses",
        b: "Subjektif",
        c: "Membutuhkan waktu lama",
        d: "Biaya yang dikeluarkan cukup besar",
        correct: "b",
    },

    {
        question: "Salah satu contoh dari sumber primer adalah...",
        a: "Hikayat",
        b: "Wikipedia",
        c: "Encyclopedia",
        d: "Prasasti",
        correct: "d",
    },

    {
        question: "Salah satu contoh dari sumber sekunder adalah...",
        a: "Hikayat",
        b: "Wikipedia",
        c: "Encyclopedia",
        d: "Prasasti",
        correct: "a",
    },

    {
        question: "Hikayat, buku sejarah, dan artikel ilmiah merupakan contoh dari sumber...",
        a: "Primer",
        b: "Sekunder",
        c: "Tersier",
        d: "Kuarter",
        correct: "b",
    },
]

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){

    deselectAnswer()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question 
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected(){
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length){
            loadQuiz()
        } else{
            quiz.innerHTML = `
            <h2>Kamu telah menjawab ${score}/${quizData.length} pertanyaan dengan benar</h2>

            <button onclick="location.reload()">Ulangi</button>
            `
        }
    }
})