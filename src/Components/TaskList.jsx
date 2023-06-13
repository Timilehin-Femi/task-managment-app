import React, { useState } from "react";
import TaskItem from "./TaskItem";
import TaskForm from "./TaskForm";
import EditTask from "./EditTask";
import {v4 as uuidv4}from "uuid";



export default function TaskList(){
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  }

  const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

  const toggleComplete = (id) => {
    setTodos( 
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const editTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  }

  const editTask = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="TaskList">
      <h2>Things to do <span>Today!</span> </h2>
      <TaskForm addTodo={addTodo} />

      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTask  key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <TaskItem
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </div>
  );
};
