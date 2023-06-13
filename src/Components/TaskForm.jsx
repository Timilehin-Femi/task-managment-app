import React, { useState } from "react";

export default function TaskForm({ addTodo }) {
    const [input, setInput] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (input) {
        
        addTodo(input);
        
       
        setInput("");
      }
    
  };

  const handleInputChange = (e) => {
   setInput(e.target.value);
  };

  return (
    <form onSubmit={handleFormSubmit} className="TaskForm">
      <input
        type="text"
        value={input}
        onChange={handleInputChange}
        className="task-input"
        placeholder="input task"
      />
      <button type="submit" className="todo-btn">
        Add Task
      </button>
    </form>
  );
}






// import React, {useState} from 'react'

// export default function TaskForm({addTodo}) {
//   const [input, setValue] = useState('');

//     const handleFormSubmit = (e) => {
//    e.preventDefault();
//         if (value) {

//           addTodo(input);

//           setValue('');
//         }
//       };

//       const handleInputChange = (e) => {
//         setInput(e.target.value);
//       };

//      return (
//     <form onSubmit={handleFormSubmit} className="TodoForm">
//     <input type="text" input={input} onChange={handleInputChange} className="todo-input" placeholder='input task' />
//     <button type="submit" className='todo-btn'>Add Task</button>
//   </form>
//   )

// }
