import React from 'react';
import Form from '../form/Form';
import {Link} from 'react-router-dom'

function SignUp({useFormType}) {
  return (
    <div>
    <h2>Sign up</h2>
    <Form useFormType={useFormType}/>
    <p>Already have account? <Link to='/login'>Go back to login page</Link></p>
    </div>
  );
}

export default SignUp;
