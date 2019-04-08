import * as actionTypes from './../actions';

const initialState = {
  tasks: [
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask = { 
        id: action.taskData.id, 
        title: action.taskData.title, 
        content: action.taskData.content 
      };
      return {
        ...state,
        tasks: state.tasks.concat(newTask)
      };
    case actionTypes.REMOVE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.id)
      };
    default:
      return state;
  }
}

export default reducer;