import * as actionTypes from '../actions/actionTypes';
import { updateState } from './../utility';

const initialState = {
  tasks: [],
  loading: false,
  error: false
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.START_LOADING:
      return updateState(state, {loading: true});
    case actionTypes.STOP_LOADING:
      return updateState(state, {loading: false});
    case actionTypes.SET_TASKS:
      return updateState(state, {tasks: action.tasks});
    case actionTypes.ADD_TASK_SUCCESS:
      return updateState(state, {tasks: state.tasks.concat(action.task)});
    case actionTypes.ADD_TASK_FAIL:
      return updateState(state, {error: action.error});
    case actionTypes.REMOVE_TASK_SUCCESS:
      return updateState(state, {tasks: state.tasks.filter(task => task.id !== action.id)});
    case actionTypes.REMOVE_TASK_FAIL:
      return updateState(state, {error: action.error});
    default:
      return state;
  }
}

export default reducer;