import React from 'react';
import { useState } from 'react';
import styles from './AddTask.module.css';

const AddTask = props => {
  const [inputState, setInputState] = useState({
    title: '',
    content: 'initial content'
  })

const updateField = (event) => {
  setInputState({
    ...inputState,
    [event.target.name]: event.target.value
  })
}

  return (
    <div className={styles.AddTask}>
      <input 
        type="text"
        placeholder="Title"
        name="title" // needed for updateField
        onChange={updateField}
        value={inputState.title} />
      <br />
      <input 
        type="text"
        placeholder="Content"
        name="content"
        onChange={updateField}
        value={inputState.content} />
      <br />
      <button type="submit" onClick={() => props.onAddTask(Math.random() * 1000000000, inputState.title, inputState.content)}>Add Task</button>
    </div>
  );
}

export default AddTask;