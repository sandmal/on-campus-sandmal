import React from 'react';
import {Link} from 'react-router-dom'

function Logout({isAuth, handleLogOut}) {
  return (
    <div>
      <p>Are you sure you want to log out?</p>
      {!isAuth && <><p>You are logged out</p><Link to='/'>Go home</Link></>}
      {isAuth && <button onClick={handleLogOut}>Log out</button>}
    </div>
  );
}

export default Logout;
