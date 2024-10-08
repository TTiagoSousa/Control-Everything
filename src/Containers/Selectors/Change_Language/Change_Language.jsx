import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Change_Language.scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { ThemeState } from '../../../Contexts/Theme_Context';
import Base_Input from '../../../Components/Inputs/Base_Input/Base_Input';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../Constants/languages';

const Change_Language = () => {

  const { i18n, t } = useTranslation();

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);

  // States to manage the search inputs
  const [languageSearch, setLanguageSearch] = useState('');

  const getColor = useMemo(() => {
    return isHovered ? Color.yellow : Color.gray_dark;
  }, [isHovered]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Altera o idioma com o i18n
    localStorage.setItem('language', lang); // Armazena o idioma no localStorage
    setOpen(false); // Fecha o menu após a seleção
  };

  const resetFilters = () => {
    setLanguageSearch('');
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
        resetFilters(); // Reseta os filtros ao fechar o menu
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Filtered lists based on search input
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(languageSearch.toLowerCase())
  );
  
  return (
    <div 
      className='Change_Language'
      ref={menuRef}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div>
          <Icon.World Global_Color={getColor}/>
        </div>
      </button>
      <div className={`Language_Options ${open ? 'active' : 'inactive'}`}>
        <div className='Arrow'></div>
        <div className='Language_Selector'>
          <div className='Title'>
            <span>{t('Language')}</span>
          </div>
          <div className='Input_Field'>
            <Base_Input 
              inputTypeStyle='type1' 
              placeholder={t('Search')}
              value={languageSearch}
              onChange={(e) => setLanguageSearch(e.target.value)}
            />
          </div>
          <ul>
            {filteredLanguages.map(lang => (
              <li key={lang.value} onClick={() => handleChangeLanguage(lang.value)}>
                <span>{lang.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Change_Language;