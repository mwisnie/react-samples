import React from 'react';

import Task from '../../../components/tasks/Task/Task';


const Tasks = props => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  };

  return (
    <div style={style}>
      {
        props.tasks.map((task, idx) => {
          return (
            <Task
              key={task.id}
              id={task.id}
              title={task.title}
              content={task.content}
              onRemoveTask={props.onRemoveTask} />
          );
        })
      }
    </div>
  );
};

export default Tasks;