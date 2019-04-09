import React, { useEffect } from 'react';

import Task from '../../../components/tasks/Task/Task';


const Tasks = props => {
  const style = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    alignItems: 'baseline'
  };

  // useEffect(() => {
  //   console.log('This should run on create');
  //   return () => console.log('This should run on destroy');
  // }, []);

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