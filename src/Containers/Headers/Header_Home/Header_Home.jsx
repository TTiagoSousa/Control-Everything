import React, { useState } from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Containers/Selectors/Change_Theme/Change_Theme';
import { ThemeState } from '../../../Contexts/Theme_Context';
import Change_Language_And_Currency from '../../Selectors/Change_Language_And_Currency/Change_Language_And_Currency';
import { NavsState } from '../../../Contexts/Navs_Context';

const Header_Home = () => {

  const { mode } = ThemeState();

  const { typeOfNavifation, show_Mobile_Sidebar_Home } = NavsState();

  const [hovered, setHovered] = useState(null);

  return (
    <header className='Header_Home'>
      <div className="Left_Side">
        <div className='Menu'>
          {
            typeOfNavifation === 'Mobile_Menu' ? (
              <button
                onClick={show_Mobile_Sidebar_Home}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            ) : null
          }
        </div>
        <span>Control Everytinhg</span>
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Theme />
        </div>
        <div className='Button_Field'>
          <Change_Language_And_Currency />
        </div>
      </div>
    </header>
  )
}

export default Header_Home