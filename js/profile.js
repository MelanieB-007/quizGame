for (const navLink of nav) {
    createNav(navLink);
}


const bodyElement = document.querySelector('[data-js="body"]');
const toggleModeButton = document.querySelector('[data-js="toggle-button"]');


toggleModeButton.addEventListener("click", () => {
    const isDark = bodyElement.classList.toggle("dark");
    toggleModeButton.dataset.state = isDark ? "on" : "off";
});
