import React from 'react';

import Task from '../../../components/Task/Task';


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
          return <Task key={task.id} title={task.title} content={task.content} />;
        })
      }
    </div>
  );
};

export default Tasks;