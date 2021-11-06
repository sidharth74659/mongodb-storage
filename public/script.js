console.log("javascript");

const list = document.querySelector('.list')
const form = document.querySelector('#form')

// const formData = {}

form.addEventListener('submit', async (e) => {
    e.preventDefault()
    
    const task = form.querySelector('#input').value;

    const res = await fetch('api/create', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ task })
    })

    console.log(await res.json())

    document.querySelector('.list').innerHTML += `<li class="border-l-2 border-pink-600 p-2 flex h-full items-center gap-4 bg-blue-400">
    <input class="h-6 w-6" type="checkbox" name="task" id="task-1" />
    <label for="task-1" class="block task-text text-xl font-bold tracking-wide flex-grow">
    ${task}
    </label>
    <button class="js-delete border-l-2">Delete</button>
    </li>`;
    
    form.reset()
})

list.addEventListener('click', (e) => {
    e.target.classList.contains('js-delete') && e.target.closest('li').remove()
})