import React, { Component } from 'react';

import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';

class TaskList extends Component {
  state = {
    dummyTasks: [
      {
        id: 1,
        title: 'Task1',
        content: 'Content'
      },
      {
        id: 2,
        title: 'Task2',
        content: 'Content'
      },
      {
        id: 3,
        title: 'Task3',
        content: 'Content afsagfsasagfsasagfsasagfsasagfsasagfsasagfsasagfsasagfsasagfsa sagfsa'
      },
      {
        id: 4,
        title: 'Task4',
        content: 'Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content Content '
      },
      {
        id: 5,
        title: 'Task5',
        content: 'cont'
      },
      {
        id: 6,
        title: 'Task6',
        content: 'cont'
      }
    ]
  }


  render() {

    return (
      <React.Fragment>
        <Tasks tasks={this.state.dummyTasks} />
        <AddTask />
      </React.Fragment>
    )
  }
}

export default TaskList;