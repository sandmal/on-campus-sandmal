import React from 'react';
import {useController} from 'react-hook-form';
import {ErrorMessage} from '@hookform/error-message';

export default function FormController({
  control,
  name,
  label,
  type,
  errors,
  option,
  formType,
  useFormType,
}) {
  const {
    field: {ref, ...inputProps},
  } = useController({
    name,
    control,
    defaultValue: '',
  });

  // If formschema type is === selected
  // This will create a dropdown box and takes a array with options as argument.

  if (formType.includes(useFormType)) {
    if (type === 'select') {
      return (
        <select {...inputProps} inputref={option}>
          {option.map(role => (
            <option key={role}>{role}</option>
          ))}
        </select>
      );
    }

    //Error message is used to display error messages for corresponding input fields
    return (
      <div className="input-container">
        <label htmlFor={name}>
          {label}
          <input type={type} {...inputProps} inputref={ref} />
        </label>
        <ErrorMessage
          errors={errors}
          name={name}
          render={({message}) => <p className="error">{message}</p>}
        />
      </div>
    );
  }
  return null;
}
