console.log("AI Quiz Assistant Loaded");

function extractQuestions() {

    const questions =
    document.querySelectorAll('.Qr7Oae');

    questions.forEach((question, index) => {

        const questionText =
        question.querySelector('.M7eMe')
        ?.innerText;

        console.log(`Question ${index + 1}:`);
        console.log(questionText);

        const options =
        question.querySelectorAll('.docssharedWizToggleLabeledLabelText');

        options.forEach((option, i) => {
            console.log(`Option ${i + 1}: ${option.innerText}`);
        });

    });
}

extractQuestions();