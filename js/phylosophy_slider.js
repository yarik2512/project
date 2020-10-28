const phylosophySlider = document.querySelector('.phylosophy-slider');
const back = document.querySelector('.phylosophy-slider-back');
const forward = document.querySelector('.phylosophy-slider-forward');

let number = 1;

function phylosophySliderMove(direct = 1) {
    const prev = document.querySelector(`.phylosophy-slider-${number}`);
    number = direct ? number == 3 ? 1 : number + 1 : number == 1 ? 3 : number - 1;
    const next = document.querySelector(`.phylosophy-slider-${number}`);
    if (direct) {
        prev.style.transition = '0.5s';
        prev.style.transform = 'translateX(-100%)';
        setTimeout(() => {
            prev.classList.toggle('active');
            prev.style.transform = 'translateX(0)';
            next.style.transform = ('translateX(100%)');
            next.classList.toggle('active');
            setTimeout(() => {
                next.style.transition = '0.5s';
                next.style.transform = 'translateX(0)';
            }, 500);
        }, 500);
    } else {
        prev.style.transition = '0.5s';
        prev.style.transform = 'translateX(100%)';
        setTimeout(() => {
            prev.classList.toggle('active');
            prev.style.transform = 'translateX(0)';
            next.style.transform = ('translateX(-100%)');
            next.classList.toggle('active');
            setTimeout(() => {
                next.style.transition = '0.5s';
                next.style.transform = 'translateX(0)';
            }, 500);
        }, 500);
    }
}


let phylosophySliderInterval = setInterval(() => {
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
    number = number == 3 ? 1 : number + 1;
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
}, 10000);

back.addEventListener('click', () => {
    clearInterval(phylosophySliderInterval);
    phylosophySliderMove(0);
    phylosophySliderInterval = setInterval(() => {
        phylosophySliderMove();
    }, 10000);
});

forward.addEventListener('click', () => {
    clearInterval(phylosophySliderInterval);
    phylosophySliderMove();
    phylosophySliderInterval = setInterval(() => {
        phylosophySliderMove();
    }, 10000);
});