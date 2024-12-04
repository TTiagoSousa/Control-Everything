import React, { useMemo } from 'react';
import './Header_Home.scss';
import { NavsState } from '../../../Contexts/Navs_Context';
import Change_Theme from '../../../Components/Buttons/Change_Theme/Change_Theme';

const Header_Home = () => {

  const { typeOfNavifation, show_Mobile_Sidebar_Home, showCustomize_Sidebar } = NavsState();

  const headerClassName = useMemo(() => {
    let baseClass = "Header_Home";
    if (typeOfNavifation === "Sidebar_Home") {
      return `${baseClass} Sidebar`;
    } else if (typeOfNavifation === "Mobile_Menu") {
      return `${baseClass} Full_Screen`;
    }
    console.warn("Invalid typeOfNavifation");
    return baseClass; // fallback className if no match
  }, [typeOfNavifation]);

  return (
    <header className={headerClassName}>
      <div className="Left_Side">
        {
          typeOfNavifation === 'Mobile_Menu' ? (
            <div className='Menu'>
              <button
                onClick={show_Mobile_Sidebar_Home}
              >
                <div></div>
                <div></div>
                <div></div>
              </button>
            </div>
          ) : null
        }
        <span>Control Everything</span>
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Theme />
        </div>
      </div>
    </header>
  )
}

export default Header_Home;