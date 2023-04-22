import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndes] = useState(null);

  function handleTask({ target }) {
    setTask(target.value);
  }

  function handleSubmitTask() {
    setListTasks([...listTasks, task]);
    setTask("");
  }

  function handleDeleteTask(index) {
    const newListTasks = [...listTasks];
    newListTasks.pop(index);
    setListTasks(newListTasks);
  }

  function handleEditTask(index) {
    setEditingTaskIndes(index);
  }

  return (
    <div>
      <h1> TodoList </h1>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={task}
        onChange={handleTask}
      />
      <button type="button" onClick={handleSubmitTask}>
        Adicionar
      </button>
      <ul className="todo-list">
        {listTasks.map((item, index) => (
          <li key={index} className="todo-list">
            {editingTaskIndex === index ? (
              <input type="text" value={item} />
            ) : (
              <div>
                {item}
                <button onClick={() => handleEditTask(index)}>Editar</button>
              </div>
            )}
            {item}
            <button
              type="button"
              onClick={() => handleDeleteTask(index)}
            ></button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
