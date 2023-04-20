import React, { useState } from "react";

function TodoList() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  function handleTask({ target }) {
    setTask(target.value);
  }

  function handleSubmitTask() {
    setListTasks([...listTasks, task]);
    setTask("");
  }

  function handleDeleteTask(index) {
    const newListTasks = [...listTasks];
    newListTasks.splice(index, 1);
    setListTasks(newListTasks);
  }

  return (
    <div>
      <h1 className="title"> TodoList </h1>
      <input type="text" value={task} onChange={handleTask} />
      <button type="button" onClick={handleSubmitTask}>
        Salvar
      </button>
      {listTasks.map((item, index) => (
        <li key={index}>
          {item}
          <button type="button" onClick={() => handleDeleteTask(index)}>
            Excluir
          </button>
        </li>
      ))}
    </div>
  );
}

export default TodoList;
