import * as actionTypes from './actionTypes';

import axios from './../../axios-tasks';

// LOADING
export const startLoading = () => {
  return {
    type: actionTypes.START_LOADING
  };
};

export const stopLoading = () => {
  return {
    type: actionTypes.STOP_LOADING
  };
};



// FETCH TASKS
export const fetchTasks = () => {
  return dispatch => {
    dispatch(startLoading());
    axios.get('/tasks.json')
          .then(response => {
            if (response.data === null) {
              console.log('No tasks found');
              dispatch(setTasks([]));
              dispatch(stopLoading());
              return;
            }

            const tasks = [];
            for (let key in response.data) {
              const task = response.data[key];
              task.id = key;
              tasks.push(task);
            }

            console.log('Fetched tasks');
            dispatch(setTasks(tasks));
          })
          .catch(error => {
            console.log('Fetched tasks failed');
            console.log(error);
            dispatch(fetchTasksFail(error));
          })
          .then(() => dispatch(stopLoading()))};
};

export const fetchTasksFail = error => {
  return {
    type: actionTypes.FETCH_TASKS_FAIL,
    error: error
  };
};


// ADD TASKS
export const addTask = taskData => {
  return dispatch => {
    dispatch(startLoading());
    axios.post('/tasks.json', taskData)
          .then(response => {
            console.log('Task added');
            console.log(response);
            axios.get(`/tasks/${response.data.name}.json`)
                    .then(response => {
                      console.log('Full task data received');
                      console.log(response);
                      dispatch(addTaskSuccess(response.data));
                      dispatch(stopLoading());
                    })
                    .catch(error => {
                      dispatch(addTaskFailure(error));
                      dispatch(stopLoading());
                    });
          })
          .catch(error => {
            dispatch(addTaskFailure(error));
            dispatch(stopLoading());
          });
  };
};

export const addTaskSuccess = task => {
  return {
    type: actionTypes.ADD_TASK_SUCCESS,
    task: task
  };
};

export const addTaskFailure = error => {
  return {
    type: actionTypes.ADD_TASK_FAIL,
    error: error
  };
};


// REMOVE TASKS
export const removeTask = id => {
  return dispatch => {
    dispatch(startLoading());
    axios.delete(`/tasks/${id}.json`)
    .then(response => {
      console.log('Deleted task');
      dispatch(removeTaskSuccess(id));
      dispatch(stopLoading());
    })
    .catch(error => {
      console.log(error);
      dispatch(removeTaskFailure());
      dispatch(stopLoading());
    });
  };
};

export const removeTaskSuccess = id => {
  return {
    type: actionTypes.REMOVE_TASK_SUCCESS,
    id: id
  };
};

export const removeTaskFailure = error => {
  return {
    type: actionTypes.REMOVE_TASK_FAIL
  };
};


export const setTasks = tasks => {
  return {
    type: actionTypes.SET_TASKS,
    tasks: tasks
  };
};