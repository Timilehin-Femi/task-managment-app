import React, {useState} from 'react'

export default function EditTask ({editTodo, task}){
    const [input, setInput] = useState(task.task);

    const handleFormSubmit = (e) => {
      
        e.preventDefault();
    
        editTodo(input, task.id);

        // setInput("")
      };

      const handleInputChange = (e) => {
        setInput(e.target.value);
      };

  return (
    <form onSubmit={handleFormSubmit} className="TaskForm">
    <input type="text" value={input} onChange={handleInputChange} className="task-input" placeholder='Update task' />
    <button type="submit" className='todo-btn'>Update</button>
  </form>
  )
}
