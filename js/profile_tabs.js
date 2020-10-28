// const tabBtns = document.querySelectorAll();
const profileTabsBtns = document.querySelector('.profile-tabs-btns');
console.log('foo');
profileTabsBtns.addEventListener('click', event => {
    const target = event.target.closest('.profile-tab-btn');
    // console.log(target.classList.contains('profile-tab-btn'));
    console.log(target);
});