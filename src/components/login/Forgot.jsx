import React from 'react';
import Form from '../form/Form';
import  {Link} from 'react-router-dom';

function Forgot({useFormType}) {
  return (
    <div>
    <h2>Forgot password</h2>
    <p>You will recieve an email with new password details</p>
    <Form useFormType={useFormType}/>
    <p> <Link to='/login'>Go back to login page</Link></p>
    </div>
  );
}

export default Forgot;
