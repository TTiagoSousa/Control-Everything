import React, { useMemo, useState } from 'react';
import './Change_Theme.scss';
import { ThemeState } from '../../../Contexts/Theme_Context';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';

const Change_Theme = () => {
  const { handleDarkMode, handleLightMode, mode } = ThemeState();
  
  const [isHovered, setIsHovered] = useState(false);

  const getColor = useMemo(() => {
    if (mode === 'dark' || mode === 'light') {
      return isHovered ? Color.yellow : Color.gray_dark;
    }
    return isHovered ? Color.blue : Color.gray;
  }, [mode, isHovered]);

  const getIcon = useMemo(() => {
    switch (mode) {
      case 'dark':
        return <Icon.Moon_N1 Global_Color={getColor} />;
      case 'light':
        return <Icon.Sun_N1 Global_Color={getColor} />;
      default:
        return null; // Caso queira tratar o modo automático, pode adicionar um ícone aqui
    }
  }, [mode, getColor]);

  const toggleTheme = () => {
    if (mode === 'dark') {
      handleLightMode();
    } else {
      handleDarkMode();
    }
  };

  return (
    <div className='Change_Theme'>
      <button
        onClick={toggleTheme}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {getIcon}
      </button>
    </div>
  );
};

export default Change_Theme;