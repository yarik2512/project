const phylosophySlider = document.querySelector('.phylosophy-slider');
const back = document.querySelector('.phylosophy-slider-back');
const forward = document.querySelector('.phylosophy-slider-forward');

let number = 1;

back.addEventListener('click', () => {
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
    number = number == 1 ? 3 : number - 1;
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
});

forward.addEventListener('click', () => {
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
    number = number == 3 ? 1 : number + 1;
    document.querySelector(`.phylosophy-slider-${number}`).classList.toggle('active');
});