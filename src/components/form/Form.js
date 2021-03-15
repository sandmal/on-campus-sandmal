import React from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {formSchema} from './FormConfig';
import FormController from './FormController';
import './Form.css'


// Validation rules used to validate fields for different forms
// Validation schema names are the same as their corresponding form name
import {
  login,
  signup,
  forgot,
} from '../form/FormConfig';

export default function Form({useFormType, handleLogIn}) {
  //Switch used to determine what form is rendered and what rule schema needs to be used
  let validation;
  switch (useFormType) {
    case 'login':
      validation = login
      break;
    case 'signup':
      validation = signup
      break;
    case 'forgot':
      validation = forgot
      break;
    default:
      // does not need a default
      validation = null;
      break;
  }
  //Useformhook https://react-hook-form.com/api
  const {handleSubmit, getValues, control, errors} = useForm({
    //onTouched will listen to fields edited, this is to add error messages in real time
    // after the user has taken focus away from field
    mode: 'onTouched',
    resolver: yupResolver(validation),
  });

  // isValid returns true if input from user fulfills requirements for corresponding rule schema
  const isValid = validation.isValidSync(getValues());

  const onSubmit = data => {
    handleLogIn()
    console.log(data);
  };

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
        {formSchema.map(field => (
          <FormController
            key={field.name}
            control={control}
            {...field}
            errors={errors}
            useFormType={useFormType}
          />
        ))}
        <button type="submit" disabled={!isValid}>
          {useFormType.toUpperCase()}
        </button>
      </form>
    </>
  );
}
