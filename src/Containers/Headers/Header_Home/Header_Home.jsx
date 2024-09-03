import React, { useMemo, useState } from 'react';
import './Header_Home.scss';
import Change_Theme from '../../../Containers/Selectors/Change_Theme/Change_Theme';
import { ThemeState } from '../../../Contexts/Theme_Context';
import Change_Language_And_Currency from '../../Selectors/Change_Language_And_Currency/Change_Language_And_Currency';
import { NavsState } from '../../../Contexts/Navs_Context';
import * as Color from '../../../Styles/Colors';
import * as Icon from '../../../Imports/icons';

const Header_Home = () => {

  const { mode } = ThemeState();

  const { typeOfNavifation, show_Mobile_Sidebar_Home, showCustomize_Sidebar } = NavsState();

  const [isHovered, setIsHovered] = useState(false);
  const getColor = useMemo(() => {
    if (mode === 'dark' || mode === 'light') {
      return isHovered ? Color.yellow : Color.gray_dark;
    }
    return isHovered ? Color.blue : Color.gray;
  }, [mode, isHovered]);

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
        <div
          className='Custumize_Sidebar_Button'
          onClick={showCustomize_Sidebar}
        >
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <Icon.Settings_With_Two_Arrows Color_1={Color.yellow} Color_2={Color.yellow} GlobalColor={getColor}/>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header_Home