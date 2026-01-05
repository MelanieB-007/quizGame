for (const navLink of nav) {
    createNav(navLink);
}

const getWarningColor = (charsLeft) =>
    charsLeft <= 10 ? 'var(--counter-warning-high)'
        : charsLeft <= 30 ? 'var(--counter-warning-medium)'
            : 'var(--counter-warning-low)';

const form = document.querySelector("[data-js='form']");  // ✅ Fix

// Event-Listener (KEIN form.reset() hier!)
form.addEventListener("reset", (event) => {
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

function initFileUpload() {
    const form = document.querySelector('[data-js="form"]');
    const fileInput = document.getElementById('imageUpload');  //
    const fileNameSpan = document.querySelector('[data-js="file-name"]');
    const previewDiv = document.querySelector('[data-js="image-preview"]');

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 2 * 1024 * 1024) {
                alert('Image too big! Max. 2MB.');
                fileInput.value = '';
                return;
            }
            if (!file.type.startsWith('image/')) {
                alert('Only images allowed!');
                fileInput.value = '';
                return;
            }
            fileNameSpan.textContent = file.name;
            const reader = new FileReader();
            reader.onload = (ev) => previewDiv.innerHTML = `<img src="${ev.target.result}" alt="${file.name}">`;
            reader.readAsDataURL(file);
        } else {
            fileNameSpan.textContent = 'No file selected';
            previewDiv.innerHTML = '';
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (fileInput.hasAttribute('required') && !fileInput.files[0]) {
            alert('Image required!');
            return;
        }
        const formElements = e.target.elements;
        const card = {
            question: formElements.question.value,
            answer: formElements.answer.value,
            possibleAnswers: [
                formElements.possibleAnswer1.value,
                formElements.possibleAnswer2.value,
                formElements.possibleAnswer3.value,
                formElements.possibleAnswer4.value
            ],
            imagePath: formElements.imageUpload.files[0]?.name || ''  // ✅ Name!
        };
        createCard(card);
        form.reset();

        // File + Custom-Elemente zurücksetzen
        fileInput.value = '';
        fileNameSpan.textContent = 'No file selected';
        previewDiv.innerHTML = '';

        // Counters resetten
        const allCounters = form.querySelectorAll('.characters--left');
        allCounters.forEach(counter => {
            counter.textContent = '150 characters left';
            counter.style.color = getWarningColor(150);
        });
    });
}

initFileUpload();
