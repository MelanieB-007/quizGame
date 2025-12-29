function createSection(
    {classList, ariaLabeledBy} = {}) {
    const section = document.createElement("section");
    section.classList.add(...classList);
    section.setAttribute("aria-labelledby", ariaLabeledBy);
    section.setAttribute("role", "group");

    return section;
}

function createDiv(
    {classList = []} = {}){
    const div = document.createElement("div");
    div.classList.add(...classList);

    return div;
}

function createButton(
    {text = "", classList = [], ariaLabel = ""} = {}){
    const button = document.createElement("button");

    button.classList.add(...classList);
    if (ariaLabel) button.setAttribute("aria-label", ariaLabel);
    button.textContent = text;
    return button;
}

function createImage(
    {icon = "", alt = "", classList= []} = {}){
    const imageBookmark = document.createElement("img");
    imageBookmark.classList.add(...classList);
    imageBookmark.src = `./assets/${icon}`;
    imageBookmark.alt = alt;

    return imageBookmark;
}

function createParagraph(
    {text, classList = [], id = ""} = {}) {
    const paragraph = document.createElement("p");
    paragraph.classList.add(...classList);
    if (paragraph)  paragraph.id = id;
    paragraph.innerHTML = text;

    return paragraph;
}
