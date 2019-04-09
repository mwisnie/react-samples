import React from 'react';

import * as classes from './Input.module.css';

export const input = props => {
  const inputElClasses = [classes.InputElement];
  if (props.shouldValidate && props.invalid && props.touched) {
    inputElClasses.push(classes.Invalid);
  }

  let inputElement = null;

  switch (props.elementType) {
    case 'input':
      inputElement = <input
        className={inputElClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.onChange} />;
      break;
    case 'textarea':
      inputElement = <textarea
        className={inputElClasses.join(' ')}
        {...props.elementConfig}
        value={props.value}
        onChange={props.onChange} />;
      break;
    case 'select':
      inputElement = (
        <select
          className={inputElClasses.join(' ')}
          {...props.inputElementConfig}
          value={props.value}
          onChange={props.onChange}>
          {props.inputElementConfig.options.map(option => {
            return (
              <option key={option.value} value={option.value}>
                {option.displayValue}
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = <input
        className={inputElClasses.join(' ')}
        {...props.inputElementConfig}
        value={props.value}
        onChange={props.onChange} />;
  }

  return (
    <div className={classes.Input}>
      <label className={classes.Label}>
        {props.label}
      </label>
      {inputElement}
    </div>
  );
}

export default input;

export function checkInputValidity(inputValue, validationRules) {
  let isValid = true;
  if (!validationRules) {
    return true;
  }

  if (validationRules.required) {
    isValid = inputValue.trim() !== '' && isValid;
  }

  if (validationRules.minLength) {
    isValid = inputValue.length >= validationRules.minLength && isValid
  }

  if (validationRules.maxLength) {
    isValid = inputValue.length <= validationRules.maxLength && isValid
  }

  if (validationRules.isEmail) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    isValid = pattern.test(inputValue) && isValid
  }

  if (validationRules.isNumeric) {
    const pattern = /^\d+$/;
    isValid = pattern.test(inputValue) && isValid
  }

  return isValid;
}