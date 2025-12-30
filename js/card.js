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
    const main = document.querySelector("main");
    const section = createSection({
        classList: ["question__card"],
        ariaLabeledBy: card.id
    });
    main.appendChild(section);

    section.appendChild(
        createDivBookmark(["question__area"], card.bookmarked));

    const divContent = createDiv({
        classList: ["question__content"]
    });
    section.appendChild(divContent);

    divContent.appendChild(
        createParagraph({
            text: card.question,
            classList: ["question__text"]
    }));

    divContent.appendChild(createButtonAnswers(card));

    section.appendChild(
        createImage({
            icon: card.imageAnswer ? card.imageAnswer : "images/quizwindow.jpg",
            alt: card.answer,
            classList: ["question__image"]
    }));
}

function createDivBookmark(classList, bookmarked){
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

    return div;
}

function createButtonAnswers(card){
    const divButtons = createDiv({
        classList: ["question__buttons"]
    });

    const divButtonRow1 = createDiv({
        classList: ["question__buttons-row"]
    });
    divButtons.appendChild(divButtonRow1);

    const button1Left = createButton({
        text: card.possibleAnswers[0],
        classList: ["button", "button__text"],
        ariaLabel: "Answer: " + card.possibleAnswers[0],
        dataJs: "button1Left"
    });
    divButtonRow1.appendChild(button1Left);

    const button1Right = createButton({
        text: card.possibleAnswers[1],
        classList: ["button", "button__text"],
        ariaLabel: "Answer: " + card.possibleAnswers[1],
        dataJs: "button1Right"
    });
    divButtonRow1.appendChild(button1Right);

    const divButtonRow2 = createDiv({
        classList: ["question__buttons-row"]
    });
    divButtons.appendChild(divButtonRow2);

    const button2Left = createButton({
        text: card.possibleAnswers[2],
        classList: ["button", "button__text"],
        ariaLabel: "Answer: " + card.possibleAnswers[2],
        dataJs: "button2Left"
    });
    divButtonRow2.appendChild(button2Left);

    const button2Right = createButton({
        text: card.possibleAnswers[3],
        classList: ["button", "button__text"],
        ariaLabel: "Answer: " + card.possibleAnswers[3],
        dataJs: "button2Right"
    });
    divButtonRow2.appendChild(button2Right);

    const divButtonRow3 = createDiv({
        classList: ["question__buttons-row"]
    });
    divButtons.appendChild(divButtonRow3);

    const button3 = createButton({
        text: "Show Answer",
        classList: ["button", "button__text"],
        ariaLabel: "Show answer",
        dataJs: "showAnswer"
    });
    divButtonRow3.appendChild(button3);

    return divButtons;
}
