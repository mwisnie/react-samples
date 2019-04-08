import React from 'react';

import styles from './Task.module.css';

const Task = props => {
  return (
    <div className={styles.Task} onClick={() => props.onRemoveTask(props.id)}>
      {props.title}
      <br />
      {props.content}
    </div>
  )
}

export default Task;
