document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('.menu a');

    if (!toggle) {
        return;
    }

    toggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('menu-open');
        toggle.setAttribute('aria-expanded', String(isOpen));
    });

    menuLinks.forEach((link) => {
        link.addEventListener('click', () => {
            document.body.classList.remove('menu-open');
            toggle.setAttribute('aria-expanded', 'false');
        });
    });
});
