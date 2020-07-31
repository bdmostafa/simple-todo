let addItem = document.querySelector('.add-item');
const addBtn = document.querySelector('.add-btn');
const displaySection = document.querySelector('.display-section');

const Todo = {
    createDiv: function (itemName) {
        let itemCard = document.createElement('div');
        itemCard.classList.add('item');

        let input = document.createElement('input');
        input.value = itemName;
        input.disabled = true;
        input.classList.add('input-item');
        input.type = 'text';

        let editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.innerHTML = 'Edit';

        let removeBtn = document.createElement('button');
        removeBtn.classList.add('remove-btn');
        removeBtn.innerHTML = 'Remove';

        displaySection.appendChild(itemCard);
        itemCard.appendChild(input);
        itemCard.appendChild(editBtn);
        itemCard.appendChild(removeBtn);
    }
}

Todo.createDiv('Item 1')