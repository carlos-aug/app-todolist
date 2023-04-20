import React, { useState } from "react";

function TodoList(params) {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);

  function handleTask(event) {
    setTask(event.target.value);
  }

  function handleSubmitTask() {
    setListTasks([...listTasks, task]);
    setTask("");
  }

  return (
    <div>
      <h1> TodoList </h1>
      <input type="text" value={task} onChange={handleTask} />
      <button type="button" onClick={handleSubmitTask}>
        Salvar
      </button>
      {listTasks.map((item, index) => (
        <li>{item}</li>
      ))}
    </div>
  );
}

export default TodoList;
