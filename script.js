// Create a Quizz Class  //
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0;
    }

    getQuestionIndex() {                        
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getQuestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.lenght;
    }

};
   // Create a Question Class //
    class Question  {
        constructor (text, choices, answer) {
            this.text = text;
            this.choices = choices;
            this.answer = answer;
        }

        isCorrectAnswer(choice) {
            return this.answer === choice;
        }
};

    // Display Question //

    function displayQuestion() {
        if (quiz.isEnded()) {
            showScores();
        } else {
         // Show Question //
        let questionElement = document.getElementById("question");
            questionElement.innerHTML = quiz.getQuestionIndex().text;

        // Show Options //
        let choices = quiz.getQuestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();

    }
};

    // Guess Answer //

    function guess(id, guess) {
        let button = document.getElementById(id);
        button.onclick = function() {
            quiz.guess(guess);
            displayQuestion();
        }
};

    // Show Quizz Progress

    function showProgress() {
        let currentQuestionNumber = quiz.questionIndex + 1;
        let progressElement = document.getElementById("progress");
            progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.lenght}`;

};

    // Show Scores

    function showScores() {
        let quizEndHTML = 
            `
            <h1>Quiz Completed</h1>
            <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.lenght}</h2>
                <div class="quiz-repeat">
                    <a href="index.html">Take Quiz Again</a>
                </div>
            `;
            let quizElement = document.getElementById("quiz");
            quizElement.innerHTML = quizEndHTML;
};

    // Create Quiz Questions

    let questions = [
        new Question(
            "Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"
        ),
        new Question(
            "Cascading Style Sheet Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "CSS"
        ),
        new Question(
            "Which is a JavaScript Framework?", ["React", "Laravel", "Sass", "Django"], "React"
        ),
        new Question(
            "Which is a backend language?", ["PHP", "HTML", "React", "All"], "PHP"
        ),
        new Question(
            "Which is best for Artifficial Intelligence?", ["React", "Laravel", "Phyton", "Sass"], "Phyton"
        )
];

    // Initialize Quiz //

    let quiz = new Quiz(questions);

    // Display Question //

    displayQuestion();

    // Add a countdown //

    let time = 1;
    let quizTimeInMinutes = time * 60 * 60;
    let quizTime = quizTimeInMinutes / 60;

    let counting = document.getElementById("count-down");

    function startCountdown() {
        let quizTimer = setInterval(function() {
            if (quizTime <= 0) {
                clearInterval(quizTimer);
                showScores();
            }   else {
                quizTime--;
                let sec = Math.floor(quizTime % 60);
                let min = Math.floor(quizTime / 60) % 60;
                counting.innerHTML = `TIME: ${min} : ${sec}`;
            }
        }, 1000);    
    }

    startCountdown();