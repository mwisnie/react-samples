import React from 'react';
import { useState } from 'react';

import Input, { checkInputValidity } from '../../../components/UI/Input/Input';
import * as classes from './AddTask.module.css';

const addTask = props => {
  const [inputState, setInputState] = useState({
    controls: {
      title: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Title'
        },
        shouldValidate: true,
        validationRules: {
          required: true
        },
        valid: false,
        touched: false,
        value: ''
      },
      content: {
        elementType: 'textarea',
        elementConfig: {
          type: 'text',
          placeholder: 'Content'
        },
        shouldValidate: false,
        validationRules: {
        },
        valid: false,
        touched: false,
        value: ''
      }
    }
  })

  const updateField = (event, controlName) => {
    const updatedControls = {
      ...inputState.controls,

      [controlName]: {
        ...inputState.controls[controlName],
        value: event.target.value,
        touched: true,
        valid: checkInputValidity(event.target.value, inputState.controls[controlName].validationRules),
      }
    }
    setInputState({ controls: updatedControls });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.onAddTask(Math.random() * 1000000000, inputState.controls.title.value, inputState.controls.content.value);

    // clear inputs / (nested state still mutably)
    const updatedControls = {
      title: {
        ...inputState.controls.title,
        value: ''
      },
      content: {
        ...inputState.controls.content,
        value: ''
      }
    }
    setInputState({ controls: updatedControls });
  };

  const controlsArray = [];
  for (let key in inputState.controls) {
    controlsArray.push({
      id: key,
      config: inputState.controls[key]
    });
  }

  const form = controlsArray.map(control => (
    <Input
      key={control.id}
      elementType={control.config.elementType}
      elementConfig={control.config.elementConfig}
      value={control.config.value}
      invalid={!control.config.valid}
      shouldValidate={control.config.shouldValidate}
      touched={control.config.touched}
      onChange={event => updateField(event, control.id)}
    />
  ));

  return (
    <div className={classes.AddTask}>
    <h2>Add task</h2>
      {form}
      <button type="submit" onClick={handleSubmit}>Add Task</button>
    </div>
  )

}

export default addTask;