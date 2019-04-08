import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddTask from './../../components/tasks/AddTask/AddTask';
import * as actions from './../../store/actions';
import Tasks from './Tasks/Tasks';

class TaskList extends Component {

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
    onAddTask: (id, title, content) => dispatch({ type: actions.ADD_TASK, taskData: { id: id, title: title, content: content } }),
    onRemoveTask: id => dispatch({ type: actions.REMOVE_TASK, id: id })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);