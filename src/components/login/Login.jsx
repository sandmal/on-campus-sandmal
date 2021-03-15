import React from 'react';
import Form from '../form/Form';
import {Link, Redirect} from 'react-router-dom';

function Login({useFormType, redirect, isAuth, handleLogIn}) {
  if(redirect){
    return <Redirect to={redirect} />
  }

  return(
     <>
     {!isAuth && <>
     <div>
     <h2>Log in</h2>
     <Form useFormType={useFormType} handleLogIn={handleLogIn}/>
     <p>Dont have an account? <Link to='signup'>Register here</Link></p>
     <p>Forgot password <Link to='/forgot'> Click here</Link> </p>
    </div>
    </>}

    {isAuth && <div><p>You are already logged in.</p><Link to='/user'>Go to user page here</Link></div>}
    </>
  );
}

export default Login;
