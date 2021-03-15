import React from 'react';
import {Link} from 'react-router-dom';

function Nav({links}) {

  const isLink = (link) => {
    return links.find(elem => elem === link)

  }

  return (
    <div>
      <nav>
        <ul>
          {isLink('home') && <li><Link to='/'>Home</Link></li>}
          {isLink('dashboard') && <li><Link to='/dashboard'>Dashboard</Link></li>}
          {isLink('user') && <li><Link to='/user'>User</Link></li>}
          {isLink('login') && <li><Link to='/login'>Log in</Link></li>}
          {isLink('logout') && <li><Link to='/logout'>log out</Link></li>}
        </ul>
      </nav>
    </div>
  );
}

Nav.defaultProps = {
  links: ['home', 'login']
}

export default Nav;
