// React and Scss
  import React from 'react';
  import './Header_Home.scss';
  import { Link } from 'react-router-dom';
// React and Scss

const Header_Home = () => {
  return (

    <header className='Header_Home'>
      <div className="Left_Side">
        <div className="Title">
          <h1>Control Everything</h1>
        </div>
      </div>
      <div className="Right_Side">
        <Link>Login or Register</Link>
      </div>
    </header>

  )
}

export default Header_Home;