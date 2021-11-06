// @ts-nocheck
console.log("javascript");

const list = document.querySelector('.js-list')
const form = document.querySelector('#form')
const btns = document.querySelectorAll('.js-btns')

document.addEventListener('DOMContentLoaded', readTodos)

form.addEventListener('submit', createTodo)

list.addEventListener('click', modifyTodo)  // Event Bubbling


async function readTodos() {
    const res = await fetch('/api/read');
    const todos = await res.json()
    console.log(todos)

    list.innerHTML = todos.map(({ task }) => `<li class="border-l-2 border-pink-600 p-2 flex h-full items-center gap-4 bg-blue-400">
                        <input class="h-6 w-6" type="checkbox" name="task" id="task-1" />
                        <input type="text" 
                        class="js-task bg-white font-bold outline-none disabled:bg-transparent "
                        value="${task}" 
                        disabled>
                        <div class="js-btns flex">
                            <button class="js-edit border-l-2">Edit</button>
                            <button class="js-done hidden border-l-2">Done</button>
                            <button class="js-delete border-l-2">Delete</button>
                        </div>
                    </li>`).join('')

}

async function createTodo(e) {
    e.preventDefault()

    const task = form.querySelector('#input').value;

    list.innerHTML += `<li class="border-l-2 border-pink-600 p-2 flex h-full items-center gap-4 bg-blue-400">
                        <input class="h-6 w-6" type="checkbox" name="task" id="task-1" />
                        <input type="text" 
                        class="js-task bg-white font-bold outline-none disabled:bg-transparent "
                        value="${task}" 
                        disabled>
                        <div class="js-btns flex">
                            <button class="js-edit border-l-2">Edit</button>
                            <button class="js-done hidden border-l-2">Done</button>
                            <button class="js-delete border-l-2">Delete</button>
                        </div>
                    </li>`;

    const res = await fetch('/api/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    })

    console.log(await res.json())

    form.reset()
}

async function updateTodo(el) {
    el.previousElementSibling.disabled = true

    el.querySelector('.js-done').classList.toggle('hidden')
    el.querySelector('.js-edit').classList.toggle('hidden')
}

function modifyTodo(e) {
    e.target.classList.contains('js-delete') && deleteTodo(e.target.closest('li'))

    e.target.classList.contains('js-edit') && editTodo(e.target.closest('.js-btns'))

    e.target.classList.contains('js-done') && updateTodo(e.target.closest('.js-btns'))
}

function deleteTodo(el) {
    el.remove()
}

function editTodo(el) {
    el.previousElementSibling.disabled = false
    el.previousElementSibling.select();
    el.previousElementSibling.focus();

    el.querySelector('.js-done').classList.toggle('hidden')
    el.querySelector('.js-edit').classList.toggle('hidden')
}
