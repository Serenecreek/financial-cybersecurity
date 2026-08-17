/* =========================
   SECURITY SCORE
========================= */

function calculateScore() {

    const checks = document.querySelectorAll(".security-check");

    let completed = 0;

    checks.forEach(function(check) {

        if (check.checked) {
            completed++;
        }

    });


    const total = checks.length;

    const percentage = Math.round((completed / total) * 100);


    document.getElementById("score").textContent =
        percentage + "%";


    const title =
        document.getElementById("score-title");

    const message =
        document.getElementById("score-message");


    if (percentage === 100) {

        title.textContent =
            "Excellent Security Habits";

        message.textContent =
            "Great job! You are following several important cybersecurity practices.";

    }

    else if (percentage >= 70) {

        title.textContent =
            "Good Security Habits";

        message.textContent =
            "You have a strong foundation, but there are still a few areas you can improve.";

    }

    else if (percentage >= 40) {

        title.textContent =
            "Room for Improvement";

        message.textContent =
            "Consider enabling more security measures to better protect your financial information.";

    }

    else {

        title.textContent =
            "Start Strengthening Your Security";

        message.textContent =
            "There are several simple steps you can take to improve your financial cybersecurity.";

    }

}


/* =========================
   PHISHING QUIZ
========================= */

function checkAnswer(isCorrect) {

    const result =
        document.getElementById("quiz-result");


    result.style.display = "block";


    if (isCorrect) {

        result.textContent =
            "✓ Correct! Do not use suspicious links. Contact your bank through an official website, app or phone number.";

        result.style.backgroundColor =
            "#FFCC00";

        result.style.color =
            "#1E1E1E";

    }

    else {

        result.textContent =
            "✗ Be careful! Suspicious messages can lead to fake websites designed to steal your information.";

        result.style.backgroundColor =
            "#1E1E1E";

        result.style.color =
            "#FFFFFF";

    }

}