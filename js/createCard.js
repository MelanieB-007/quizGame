for (const navLink of nav) {
    createNav(navLink);
}

const form = document.querySelector(('[data-js="form"]'));

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
});

document.addEventListener('input', (event) => {
    const input = event.target.matches(
        '[data-js="question"], ' +
        '[data-js="answer"], ' +
        '[data-js="possibleAnswer1"], ' +
        '[data-js="possibleAnswer2"], ' +
        '[data-js="possibleAnswer3"], ' +
        '[data-js="possibleAnswer4"]')
        ? event.target
        : event.target.closest(
            '[data-js="question"], ' +
            '[data-js="answer"], ' +
            '[data-js="possibleAnswer1"], ' +
            '[data-js="possibleAnswer2"], ' +
            '[data-js="possibleAnswer3"], ' +
            '[data-js="possibleAnswer4"]');

    if (!input) return;

    const maxLength = input.maxLength;
    const currentLength = input.value.length;
    const charactersLeft = maxLength - currentLength;

    const counter = input.parentElement.querySelector('.characters--left');
    counter.textContent = `${charactersLeft} characters left`;

    if (charactersLeft <= 10) {
        counter.style.color = '#dc2626';
    } else if (charactersLeft <= 30) {
        counter.style.color = '#eab308';
    } else {
        counter.style.color = '#22c55e';
    }
});