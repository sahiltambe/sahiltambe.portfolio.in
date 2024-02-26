document.addEventListener('DOMContentLoaded', function () {
    const typed = document.querySelector('.typed');
    const typedItems = typed.getAttribute('data-typed-items').split(',');
    let index = 0;

    function displayText() {
        typed.textContent = typedItems[index];
        anime({
            targets: '.typed',
            opacity: 1,
            duration: 1000,
            easing: 'easeInOutQuad',
            complete: function () {
                setTimeout(() => {
                    anime({
                        targets: '.typed',
                        opacity: 0,
                        duration: 1000,
                        easing: 'easeInOutQuad',
                        complete: function () {
                            index = (index + 1) % typedItems.length;
                            setTimeout(displayText, 1000);
                        }
                    });
                }, 2000);
            }
        });
    }

    displayText();
});
