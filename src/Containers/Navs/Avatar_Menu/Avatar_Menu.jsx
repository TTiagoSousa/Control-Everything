import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Avatar_Menu.scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { useTranslation } from 'react-i18next';
import { useLogout } from '../../../Hooks/Auth/useLogout';

const Avatar_Menu = () => {

  const { t } = useTranslation();

  const { logout } = useLogout();

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);

  const getColor = useMemo(() => {
    return isHovered ? Color.yellow : Color.gray_dark;
  }, [isHovered]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      className='Avatar_Menu'
      ref={menuRef}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <Icon.Base_Avatar Color_1={getColor} Color_2={getColor} Color_3={getColor}/>
        </div>
      </button>
      <div className={`Avatar_Menu_Options ${open ? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <div className='Options'>
          <ul>
            <li onClick={logout}>
              <button>{t('Sign out')}</button>
              <div className='Icon'>
                <Icon.Double_Dor GlobalColor={Color.yellow}/>
              </div>
            </li>
            {/* <li className='Diviser'></li> */}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Avatar_Menu;