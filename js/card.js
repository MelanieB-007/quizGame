document.addEventListener("click", (event) => {
    if (event.target.closest('[data-js="button__bookmark"]')) {
        const button = event.target.closest('[data-js="button__bookmark"]');
        const img = button.querySelector('.bookmark__image');

        const isBookmarked = button.toggleAttribute('data-bookmarked');

        // Icon je nach State tauschen
        img.src = isBookmarked
            ? "./assets/icons/bookmark_checked.png"
            : "./assets/icons/bookmark_plus.png";
        img.alt = isBookmarked
            ? "bookmark checked"
            : "add to bookmarks";
    }
})

function createCard(card) {
    const answer = "<strong>Answer:</strong> " + card.answer;

    const main = document.querySelector("main");
    const section = createSection({
        classList: ["question__card"],
        ariaLabeledBy: card.id
    });
    main.appendChild(section);

    section.appendChild(createDivQuestionArea(
        card.question, ["question__area"], card.bookmarked));

    section.appendChild(createParagraph({
        text: answer,
        classList: ["question__answer__text", "question__answer--visible"]
    }));

    section.appendChild(createDivShowButton(["button__wrapper"]));

    section.appendChild(createDivImages(card.imageAnswer, card.answer));

    section.appendChild(createParagraph({
        text: "Choose the correct answer:",
        classList: ["question__answer__label", "question__text"]
}));

    section.appendChild(createDivButtonContainerAnswers(
        card.possibleAnswers, ["button__container"]));

}

function createDivQuestionArea(question, classList, bookmarked){
    const div = createDiv({classList:classList});

    const button = createButton({
        classList: ["button", "button__bookmark"],
        ariaLabel: "Toggle bookmark",
        dataJs: "button__bookmark"
    });

    let icon;
    let alt;

    if (bookmarked){
        button.setAttribute("data-bookmarked", "");
        icon = "icons/bookmark_checked.png";
        alt = "bookmark checked";
    } else {
        icon = "icons/bookmark_plus.png";
        alt = "add to bookmarks";
    }

    button.appendChild(createImage({
        icon: icon,
        alt: alt,
        classList: ["bookmark__image"]
    }));

    div.appendChild(button);

    div.appendChild(createParagraph({
        text: question,
        classList: ["question__text"],
        id: "question-title1"
    }));

    return div;
}

function createDivShowButton (classList){
    const div = createDiv ({classList: classList});

    div.appendChild(createButton({
        ariaLabel: "Show correct answer",
        classList: ["button", "button--show-answer", "button__text"],
        text: "Show Answer"
}));

    return div;
}

function createDivImages(imageAnswer, altText){
    const div = createDiv ();
    console.log(imageAnswer);
    if(!imageAnswer){
        imageAnswer = "images/quizwindow.jpg";
    }

    div.appendChild(createImage({
        icon: imageAnswer,
        alt: altText,
        classList: ["question__image", "question__image--visible"]
    }));

    div.appendChild(createImage({
        icon: "images/quizwindow.jpg",
        alt: "window with question mark",
        classList: ["question__image", "question__image--hidden"]
    }));

    return div;
}

function createDivButtonContainerAnswers(possibleAnswers, classList){
    const div = createDiv({classList: classList});

    for (const text of possibleAnswers) {
        div.appendChild(createButton({
            text: text,
            classList: ["button", "button--answer", "button__text"],
            ariaLabel: "Answer: " + text
        }));
    }
    return div;
}