const testTask = `
    <span data-for="task-ans-1" class="task-ans-label" data-right></span><!--
    --><input type="text" name="task-ans-1" id="task-ans-1" data-right class="modal-ans-input" placeholder="Вариант ответа"><br>
    <span data-for="task-ans-2" class="task-ans-label"></span><!--
    --><input type="text" name="task-ans-2" id="task-ans-2" class="modal-ans-input" placeholder="Вариант ответа"><br>
    <button class="modal-add-ans-btn test-task-btn add" type="button" id="add-ans"><img src="img/add_black.svg" alt="+" class="modal-add-ans-img"></button>
    <span class="modal-add-ans-span">Добавить еще один вариант</span>
    <button class="modal-add-ans-btn test-task-btn rm" type="button" id="add-ans"><img src="img/clear.svg" alt="x" class="modal-add-ans-img"></button>
    <span class="modal-add-ans-span">Удалить вариант</span>
`;

const solveTask = `
<input type="text" class="modal-add-criterion-input" name="criterion-1" placeholder="критерий"><!--
--><input type="number" class="modal-add-criterion-score" name="criterion-1-score" placeholder="балл"><br>
   <button type="button" class="modal-add-ans-btn solve-task-btn add" id="add-ans"><img src="img/add_black.svg" alt="+" class="modal-add-ans-img"></button>
   <span class="modal-add-ans-span">Добавить критерий</span>
   <button class="modal-add-ans-btn solve-task-btn rm" type="button" id="rm-ans"><img src="img/clear.svg" alt="x" class="modal-add-ans-img"></button>
   <span class="modal-add-ans-span">Удалить вариант</span>
`;

const openTask = `
    <textarea class="modal-add-open-textarea" name="task-ans" cols="30" rows="10" placeholder="Верный ответ"></textarea>
`;

const variants = [testTask, solveTask, openTask];

const modalAddVariate = document.querySelector('.modal-add-variate');
const modalAddSelect = document.querySelector('.modal-add-select');



modalAddVariate.addEventListener('click', event => {
    const target = event.target.closest('.task-ans-label');
    if (target) {
        const prev = document.querySelector('.modal-add-variate > .modal-ans-input[data-right]');
        const prevSpan = document.querySelector(`.task-ans-label[data-for=${prev.id}]`);
        const next = document.querySelector(`#${target.dataset.for}`);
        if (prev.id != target.id) {
            prev.removeAttribute('data-right');
            prevSpan.removeAttribute('data-right');
            next.setAttribute('data-right', '');
            target.setAttribute('data-right', '');
        }
    }
});

let count1 = 2;

modalAddVariate.addEventListener('click', event => {
    const target = event.target.closest('.modal-add-ans-btn.test-task-btn');
    if (target) {
        if (target.classList.contains('add')) {
            count1++;
            const newInput = document.createElement('input');
            newInput.classList.add('modal-ans-input');
            newInput.setAttribute('id', `task-ans-${count1}`);
            newInput.setAttribute('type', 'text');
            newInput.setAttribute('name', `task-ans-${count1}`);
            newInput.setAttribute('placeholder', 'Вариант ответа');
            const newSpan = document.createElement('span');
            newSpan.classList.add('task-ans-label');
            newSpan.setAttribute('data-for', `task-ans-${count1}`);
            const br = document.createElement('br');
            modalAddVariate.insertBefore(newSpan, target);
            modalAddVariate.insertBefore(newInput, target);
            modalAddVariate.insertBefore(br, target);
        } else if (count1 > 1) {
            const lastInput = document.querySelector(`#task-ans-${count1}`);
            const lastSpan = document.querySelector(`[data-for=task-ans-${count1}]`);
            const lastBr = modalAddVariate.querySelectorAll('br')[count1-1];
            if (lastInput.hasAttribute('data-right')) {
                document.querySelector(`#task-ans-${count1-1}`).setAttribute('data-right', '');
                document.querySelector(`[data-for=task-ans-${count1-1}]`).setAttribute('data-right', '');
            }
            modalAddVariate.removeChild(lastInput);
            modalAddVariate.removeChild(lastSpan);
            modalAddVariate.removeChild(lastBr);
            count1--;
        }
    }
});

let count2 = 1;

modalAddVariate.addEventListener('click', event => {
    const target = event.target.closest('.modal-add-ans-btn.solve-task-btn');
    if (target) {
        if (target.classList.contains('add')) {
            count2++;
            const newInput1 = document.createElement('input');
            newInput1.classList.add('modal-add-criterion-input');
            newInput1.setAttribute('type', 'text');
            newInput1.setAttribute('name', `criterion-${count2}`);
            newInput1.setAttribute('placeholder', 'критерий');
            const newInput2 = document.createElement('input');
            newInput2.classList.add('modal-add-criterion-score');
            newInput2.setAttribute('type', 'number');
            newInput2.setAttribute('name', `criterion-${count2}-score`);
            newInput2.setAttribute('placeholder', 'балл');
            const br = document.createElement('br');
            modalAddVariate.insertBefore(newInput1, target);
            modalAddVariate.insertBefore(newInput2, target);
            modalAddVariate.insertBefore(br, target);
        } else if (count2 > 1) {
            const lastInput1 = document.querySelector(`.modal-add-criterion-input[name=criterion-${count2}]`);
            const lastInput2 = document.querySelector(`.modal-add-criterion-score[name=criterion-${count2}-score]`);
            const lastBr = modalAddVariate.querySelectorAll('br')[count2-1];
            modalAddVariate.removeChild(lastInput1);
            modalAddVariate.removeChild(lastInput2);
            modalAddVariate.removeChild(lastBr);
            count2--;
        }
    }
});

modalAddSelect.addEventListener('change', event => {
    modalAddVariate.innerHTML = variants[event.target.selectedIndex];
    count1 = 2;
    count2 = 1;
});