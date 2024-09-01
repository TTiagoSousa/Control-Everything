import React from 'react';
import './Header_Index.scss';
import Change_Theme from '../../Selectors/Change_Theme/Change_Theme';

const Header_Index = () => {
  return (
    <div className='Header_Index'>
      <div className="Left_Side">
        <span>Control Everytinhg</span>
      </div>
      <div className="Right_Side">
        <div className='Button_Field'>
          <Change_Theme />
        </div>
      </div>
    </div>
  )
}

export default Header_Index;