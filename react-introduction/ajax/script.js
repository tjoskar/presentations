document.querySelector('button[name="save"]').addEventListener('click', async e => {
  e.stopPropagation();
  e.preventDefault();
  const newTaskNameInput = document.querySelector('input[name="new-task"]');
  const newTaskName = newTaskNameInput.value;
  if (newTaskName.length < 3) {
    return alert('Namnet måste vara minst 4 tecken');
  }

  newTaskNameInput.value = '';
  const newTodo = await createNewTask(newTaskName);
  appendTask(newTodo);
});

function appendTask(task) {
  const taskList = document.querySelector('ul');
  const newTaskHtml = document.createElement('li');
  newTaskHtml.innerHTML = `<input type="checkbox" id="${task.id}" name="complete"><label for="${task.id}"> ${task.taskName}</label>`;
  taskList.appendChild(newTaskHtml);
}

function createNewTask(taskName) {
  return fetch('https://my-json-server.typicode.com/tjoskar/presentations/todos', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ taskName })
  }).then(r => r.json());
}
