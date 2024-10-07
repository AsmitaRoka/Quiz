// script.js

document.getElementById('startQuizButton').addEventListener('click', function() {
    // Hide the "Start Quiz" button
    document.getElementById('startQuizButton').style.display = 'none';
    
    // Show the quiz selection title and buttons
    document.getElementById('quizSelectionTitle').style.display = 'block';
    document.querySelector('.buttons').style.display = 'block';
});

// Event listeners for quiz buttons
document.getElementById('mathButton').addEventListener('click', function() {
    showQuestions('mathQuestions');
});

document.getElementById('swedishButton').addEventListener('click', function() {
    showQuestions('swedishQuestions');
});

document.getElementById('englishButton').addEventListener('click', function() {
    showQuestions('englishQuestions');
});

// Show questions and hide selection
function showQuestions(quizType) {
    // Hide quiz selection title and buttons
    document.getElementById('quizSelectionTitle').style.display = 'none';
    document.querySelector('.buttons').style.display = 'none';
    
    // Hide all questions
    const questionContainers = document.querySelectorAll('.question');
    questionContainers.forEach(container => {
        container.style.display = 'none';
    });
    
    // Show selected questions
    document.getElementById(quizType).style.display = 'block';
}

// Handle form submissions for Math Quiz
document.getElementById('mathQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateScore('mathQuiz', { math1: 'b', math2: 'a' });
    showNextQuiz('swedishQuestions'); // Navigate to the next quiz
});

// Handle form submissions for Swedish Quiz
document.getElementById('swedishQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateScore('swedishQuiz', { swedish1: 'b', swedish2: 'b' });
    showNextQuiz('englishQuestions'); // Navigate to the next quiz
});

// Handle form submissions for English Quiz
document.getElementById('englishQuiz').addEventListener('submit', function(event) {
    event.preventDefault();
    calculateScore('englishQuiz', { english1: 'b', english2: 'a' });
    alert("You've completed all quizzes!"); // Final message after last quiz
});

// Calculate the score
function calculateScore(quizId, answers) {
    let score = 0;
    const formData = new FormData(document.getElementById(quizId));
    
    formData.forEach((value, key) => {
        if (answers[key] === value) {
            score++;
        }
    });

    alert(`You scored ${score} out of ${Object.keys(answers).length}!`);
}

// Function to show the next quiz
function showNextQuiz(nextQuizType) {
    // Hide all questions
    const questionContainers = document.querySelectorAll('.question');
    questionContainers.forEach(container => {
        container.style.display = 'none';
    });

    // Show the next quiz questions
    document.getElementById(nextQuizType).style.display = 'block';
}
