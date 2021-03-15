import * as yup from 'yup';

require('yup-password')(yup);

export const signup = yup.object().shape({
  firstName: yup
    .string()
    .min(4, 'First name must be atleast 4 characters')
    .required('First name is required'),
  lastName: yup
    .string()
    .min(4, 'Last name must be atleast 4 characters')
    .required('Last name is required'),
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .required('Please confirm your password')
    .oneOf([yup.ref('password'), null], "Passwords don't match"),
});

export const login = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required('Email is required'),
  password: yup
    .string()
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character'
    )
    .required('Password is required'),
});

export const forgot = yup.object().shape({
  email: yup
    .string()
    .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)
    .required('Email is required'),
});

export const formSchema = [
  {
    name: 'firstName',
    label: 'First Name: ',
    type: 'text',
    formType: ['signup'],
  },
  {
    name: 'lastName',
    label: 'Last Name: ',
    type: 'text',
    formType: ['signup'],
  },
  {
    name: 'email',
    label: 'Email: ',
    type: 'email',
    formType: ['signup', 'login', 'forgot'],
  },
  {
    name: 'role',
    label: 'Role: ',
    type: 'select',
    option: ['None', 'Student', 'Teacher'],
    formType: ['signup'],
  },
  {
    name: 'password',
    label: 'Password: ',
    type: 'password',

    formType: ['signup', 'login'],
  },
  {
    name: 'confirmPassword',
    label: 'Confirm password: ',
    type: 'password',
    formType: ['signup'],
  },
];
