import React from 'react';
import { useState } from 'react';

import Input, { checkInputValidity } from './../../components/UI/Input/Input';
import * as classes from './SignIn.module.css';

const signIn = props => {
  const [inputState, setInputState] = useState({
    controls: {
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Email'
        },
        shouldValidate: true,
        validationRules: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false,
        value: ''
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        shouldValidate: true,
        validationRules: {
          required: true,
          minLength: 6
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

    console.log('Submit of ', inputState.controls.email.value, inputState.controls.password.value);

    // clear inputs / (nested state still mutably)
    const updatedControls = {
      email: {
        ...inputState.controls.title,
        value: ''
      },
      password: {
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
    <div className={classes.SignIn}>
    <h2>Please log in</h2>
      {form}
      <button type="submit" onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default signIn;
