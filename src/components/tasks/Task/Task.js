import React from 'react';

import styles from './Task.module.css';

const Task = props => {
  return (
    <div className={styles.Task}>
      {props.title}
      <br />
      {props.content}
    </div>
  )
}

export default Task;
