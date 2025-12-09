// Prompt Quizzer – A Quiz Game

// Array of quiz questions (minimum 5)
const quizQuestions = [
    { question: "What is the capital of India?", answer: "new delhi" },
    { question: "Who invented Java programming language?", answer: "james gosling" },
    { question: "What does HTML stand for?", answer: "hypertext markup language" },
    { question: "Which keyword is used to declare a variable in JavaScript?", answer: "let" },
    { question: "What symbol is used for single-line comments in JavaScript?", answer: "//" }
];

// Function to run the quiz
function runQuiz() {
    let score = 0; // score counter

    for (let i = 0; i < quizQuestions.length; i++) {
        let userAnswer = prompt(quizQuestions[i].question);

        // normalize input to compare correctly
        if (userAnswer) {
            userAnswer = userAnswer.toLowerCase().trim();
        } else {
            userAnswer = "";
        }

        if (userAnswer === quizQuestions[i].answer) {
            alert("Correct! 🎉");
            score++;
        } else {
            alert(`Wrong ❌\nCorrect answer: ${quizQuestions[i].answer}`);
        }
    }

    // final score
    alert(`Quiz Completed!\nYour score: ${score} / ${quizQuestions.length}`);
}

// Start the quiz
runQuiz();
