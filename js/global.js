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
    const image = document.createElement("img");
    image.classList.add(...classList);
    image.src = `./assets/${icon}`;
    image.alt = alt;
    image.setAttribute("title", alt);

    return image;
}

function createParagraph(
    {text, classList = [], id = ""} = {}) {
    const paragraph = document.createElement("p");
    paragraph.classList.add(...classList);
    if (paragraph)  paragraph.id = id;
    paragraph.innerHTML = text;

    return paragraph;
}

function createA(
    {hrefAElement, classListAElement, arialLabel} = {}) {
    const href = document.createElement("a");
    href.href = hrefAElement;
    href.classList.add(...classListAElement);
    href.setAttribute("aria-label", arialLabel);

    return href;
}
