import React, { useState } from "react";
import Button from "react-bootstrap/Button";

function TodoList() {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [editingTaskIndex, setEditingTaskIndex] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  function handleTask({ target }) {
    setTask(target.value);
  }

  function handleSubmitTask() {
    if (!task.length) {
      return;
    }
    setListTasks([...listTasks, task]);
    setTask("");
  }

  function handleDeleteTask(index) {
    const newListTasks = [...listTasks];
    newListTasks.pop(index);
    setListTasks(newListTasks);
  }

  function handleEditTask(index) {
    setEditingTaskIndex(index);
  }

  function handleSaveTask(index) {
    const newListTasks = [...listTasks];
    newListTasks[index] = editedTask;
    setListTasks(newListTasks);
    setEditingTaskIndex(null);
    setEditedTask("");
  }

  function handleEditedTask({ target }) {
    setEditedTask(target.value);
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
              <div>
                <input
                  type="text"
                  value={editedTask}
                  onChange={handleEditedTask}
                />
                <button type="button" onClick={() => handleSaveTask(index)}>
                  Salvar
                </button>
              </div>
            ) : (
              <div>
                {item}
                <Button variant="primary" onClick={() => handleEditTask(index)}>
                  Editar
                </Button>
              </div>
            )}
            <button type="button" onClick={() => handleDeleteTask(index)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
