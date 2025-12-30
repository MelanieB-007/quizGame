
for (const card of questions) {
    createCard(card);
}

for (const navLink of nav) {
    createNav(navLink);
}

const bookmarkButton = document.querySelector('[data-js = "button__bookmark"]');

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