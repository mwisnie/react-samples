import React, { Component, } from 'react';
import { connect } from 'react-redux';

import * as actionCreators from './../../store/actions';
import AddTask from './AddTask/AddTask';
import Tasks from './Tasks/Tasks';

class TaskList extends Component {

  componentDidMount() {
    console.log('Fetching tasks');
    this.props.fetchTasks();
  }

  render() {
    return (
      <React.Fragment>
        <Tasks
          tasks={this.props.tasksByProps}
          onRemoveTask={this.props.onRemoveTask} />
        <AddTask onAddTask={this.props.onAddTask} />
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    tasksByProps: state.tasksR.tasks
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchTasks: () => dispatch(actionCreators.fetchTasks()),
    onAddTask: (id, title, content) => dispatch(actionCreators.addTask({ id: id, title: title, content: content })),
    onRemoveTask: id => dispatch(actionCreators.removeTask(id))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);