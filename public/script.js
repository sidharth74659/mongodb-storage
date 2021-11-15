// @ts-nocheck
console.log("javascript");

const list = document.querySelector('.js-list')
const form = document.querySelector('#form')
const btns = document.querySelectorAll('.js-btns')

let updatedTask = {}
let prevElement;

document.addEventListener('DOMContentLoaded', readTodos)

form.addEventListener('submit', createTodo)

list.addEventListener('click', modifyTodo)  // Event Bubbling


async function readTodos() {
    const res = await fetch('/api/read')
    const todos = await res.json()
    console.log(todos)

    list.innerHTML = todos.map(HTMLTemplate).join('')
}

async function createTodo(e) {
    e.preventDefault()

    const task = form.querySelector('#input').value;

    list.innerHTML += HTMLTemplate({ task });

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

function modifyTodo(e) {
    prevElement = e.target.closest('.btns') && e.target.closest('.btns').previousElementSibling

    e.target.classList.contains('js-delete') && deleteTodo(e.target.closest('li'))

    e.target.classList.contains('js-edit') && editTodo(e.target.closest('.js-btns'))

    e.target.classList.contains('js-done') && checkTodo(e.target.closest('.js-btns'))
}

function deleteTodo(el) {
    el.remove()
}

// list.querySelectorAll('.js-task').forEach(task => {
//     console.log(task)
//     task.addEventListener('change', () => updatedTask.newTask = task.value)
// })

function editTodo(el) {
    prevElement = el;0

    updatedTask.oldTask = el.previousElementSibling.value

    console.log("editTodo : ");

    console.log(updatedTask);

    toggleDone()

    el.previousElementSibling.disabled = false
    el.previousElementSibling.select();
    el.previousElementSibling.focus();

    el.querySelector('.js-done').classList.toggle('hidden')
    el.querySelector('.js-edit').classList.toggle('hidden')
}

async function checkTodo(el) {
    updatedTask.newValue = el.previousElementSibling.value

    el.previousElementSibling.disabled = true

    console.log("updateTodo: ");
    console.log(updatedTask);

    updateTodo(updatedTask)
    el.querySelector('.js-done').classList.toggle('hidden')
    el.querySelector('.js-edit').classList.toggle('hidden')
}

async function updateTodo(updatedTask) {
    const res = await fetch('/api/update', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedTask)
    })

    console.log(await res.json())
}

function toggleDone() {
    list.querySelectorAll('li').forEach(li => {
        li.querySelector('.js-task').disabled = true;

        li.querySelector('.js-edit').classList.remove('hidden')
        li.querySelector('.js-done').classList.remove('hidden')

        li.querySelector('.js-done').classList.add('hidden')
    })
}


function HTMLTemplate({ task }) {
    return `<li class="border-l-2 border-pink-600 p-2 flex h-full items-center gap-4 bg-blue-400">
    <input class="h-6 w-6" type="checkbox" name="task" id="task-1" /><input type="text" class="js-task bg-white font-bold outline-none disabled:bg-transparent" value="${task}" disabled><div class="js-btns flex"> <button class="js-edit border-l-2">Edit</button>    <button class="js-done hidden border-l-2">Done</button> <button class="js-delete border-l-2">Delete</button></div>
    </li>`
}