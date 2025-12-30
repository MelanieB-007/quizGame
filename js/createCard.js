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