const fadeOut = () => {
    const loadWrapper = document.querySelector('.wrapper');
    loadWrapper.classList.add('fade');
    setTimeout(() => {
        loadWrapper.remove();
    }, 1000);
};

window.addEventListener('load', fadeOut);