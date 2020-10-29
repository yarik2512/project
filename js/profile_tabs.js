const profileTabsBtns = document.querySelector('.profile-tabs-btns');

profileTabsBtns.addEventListener('click', event => {
    const target = event.target.closest('.profile-tab-btn');
    if (target) {
        const prev = document.querySelector('.profile-tab-btn.active');
        if (prev.id != target.id) {
            prev.classList.remove('active');
            document.querySelector(`.${prev.id}-tab`).classList.remove('active');
            target.classList.add('active');
            document.querySelector(`.${target.id}-tab`).classList.add('active');
        }
    }
});

const statsTab = document.querySelector('.stats-tab');

statsTab.addEventListener('click', event => {
    const target = event.target.closest('.stats-category-open');
    if (target) {
        console.log('foo');
        const prev = document.querySelector('.stats-category.active');
        const next = document.querySelector(`#${target.dataset.category}`);
        if (prev.id != next.id) {
            prev.classList.remove('active');
            next.classList.add('active');
        }
    }
});