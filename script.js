let addItem = document.querySelector('.add-item');
const addBtn = document.querySelector('.add-btn');
const displaySection = document.querySelector('.display-section');

const Todo = {
    displayTodo: function (itemName) {
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

        editBtn.addEventListener('click', () => {
            this.editTodo(input);
        });


        removeBtn.addEventListener('click', () => {
            this.removeCard(itemCard)
        });
    },

    editTodo: function (input) {
        input.disabled = !input.disabled;
    },

    removeCard: function (itemCard) {
        displaySection.removeChild(itemCard);
    }
}

function addTodo() {
    if (addItem.value != '') {
        Todo.displayTodo(addItem.value);
        addItem.value = '';
    }
}

addBtn.addEventListener('click', addTodo);

// event.which == 13 is for Enter key press from keyboard
window.addEventListener('keydown', (event) => {
    if (event.which == 13) {
        addTodo();
    }
});