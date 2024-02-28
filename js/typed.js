document.addEventListener('DOMContentLoaded', function () {
    const typed = document.querySelector('.typed');
    const typedItems = typed.getAttribute('data-typed-items').split(',');
    let index = 0;

    function displayText() {
        typed.textContent = typedItems[index];
        setTimeout(() => {
            typed.textContent = '';
            index = (index + 1) % typedItems.length;
            setTimeout(displayText, 1000);
        }, 2000);
    }

    displayText();

    // Typed.js initialization
    new Typed('.typed', {
        strings: typedItems,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1000
    });
});