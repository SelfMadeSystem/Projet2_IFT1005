const tabs = document.querySelectorAll('.nav-tab');

tabs.forEach(tab => {
    const button = tab.querySelector('.nav-tab__button');

    button.addEventListener('click', () => {
        tab.classList.toggle('active');
    });

    window.addEventListener('click', (e) => {
        if (!tab.contains(e.target)) {
            tab.classList.remove('active');
        }
    });
});
