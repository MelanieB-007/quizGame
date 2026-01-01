for (const navLink of nav) {
    createNav(navLink);
}

const getWarningColor = (charsLeft) =>
    charsLeft <= 10 ? 'var(--counter-warning-high)'
        : charsLeft <= 30 ? 'var(--counter-warning-medium)'
            : 'var(--counter-warning-low)';

const form = document.querySelector(('[data-js="form"]'));
form.reset();

form.addEventListener("submit", (event) => {
   event.preventDefault();

   const formElements = event.target.elements;

   const card = {
       question: formElements.question.value,
       answer: formElements.answer.value,
       possibleAnswers: [
           formElements.possibleAnswer1.value,
           formElements.possibleAnswer2.value,
           formElements.possibleAnswer3.value,
           formElements.possibleAnswer4.value
       ]
   }

    createCard(card);
});

form.addEventListener("reset", (event) =>{
   event.target.reset();
   const allCounter = event.target.querySelectorAll('.characters--left');

   allCounter.forEach(counter => {
       counter.textContent = `150 characters left`;
       counter.style.color = getWarningColor(150);
   });
});

document.addEventListener('input', (event) => {
    const input = event.target.matches('[data-js*="possibleAnswer"],[data-js="question"],[data-js="answer"]')
        ? event.target
        : event.target.closest('[data-js*="possibleAnswer"],[data-js="question"],[data-js="answer"]');

    if (!input) return;

    const maxLength = input.maxLength;
    const currentLength = input.value.length;
    const charactersLeft = maxLength - currentLength;

    const counter = input.parentElement.querySelector('.characters--left');
    counter.textContent = `${charactersLeft} characters left`;
    counter.style.color = getWarningColor(charactersLeft);
});