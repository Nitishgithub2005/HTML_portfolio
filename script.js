document.addEventListener('DOMContentLoaded', function () {
    const modeSwitchButton = document.getElementById('modeSwitch');
    const body = document.body;

    modeSwitchButton.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        body.classList.toggle('light-mode');
    });

    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        body.classList.add('dark-mode');
    } else {
        body.classList.add('light-mode');
    }
});
