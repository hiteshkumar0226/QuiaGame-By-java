// JavaScript Console Quiz Game
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "What is 5 + 5?",
        answer: "10"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        answer: "pacific"
    },
    {
        question: "How many continents are there?",
        answer: "7"
    }
];

let score = 0;
let totalQuestions = quizQuestions.length;

for (let i = 0; i < totalQuestions; i++) {
    const userAnswer = prompt(`Question ${i + 1}/${totalQuestions}: ${quizQuestions[i].question}`);
    
    if (userAnswer) {
        const cleanAnswer = userAnswer.toLowerCase().trim();
        const correctAnswer = quizQuestions[i].answer;
        
        if (cleanAnswer === correctAnswer) {
            score++;
            alert("✅ Correct! Well done!");
        } else {
            alert(`❌ Incorrect. The correct answer was: "${correctAnswer}"`);
        }
    } else {
        alert("❌ Skipped question. Moving on...");
    }
}

// Final Score Display
const percentage = Math.round((score / totalQuestions) * 100);
alert(`Quiz Complete!\nYour score: ${score}/${totalQuestions} (${percentage}%)\n${percentage >= 80 ? "🎉 Excellent!" : percentage >= 60 ? "👍 Good job!" : "📚 Keep practicing!"}`);
