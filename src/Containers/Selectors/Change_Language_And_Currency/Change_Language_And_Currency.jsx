import React, { useEffect, useMemo, useRef, useState } from 'react';
import './Change_Language_And_Currency.scss';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { ThemeState } from '../../../Contexts/Theme_Context';
import { cryptoCurrencies } from '../../../Constants/currencies/cryptoCurrencies';
import Base_Input from '../../../Components/Inputs/Base_Input/Base_Input';
import { fiduciaryCurrencies } from '../../../Constants/currencies/fiduciaryCurrencies';
import { useTranslation } from 'react-i18next';
import { languages } from '../../../Constants/languages';

const Change_Language_And_Currency = () => {

  const { mode } = ThemeState();

  const { i18n, t } = useTranslation();

  const [selectCurrency, setSelectCurrency] = useState('USD')

  const [open, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const menuRef = useRef(null);

  // States to manage the search inputs
  const [languageSearch, setLanguageSearch] = useState('');
  const [cryptoSearch, setCryptoSearch] = useState('');
  const [currencySearch, setCurrencySearch] = useState('');
  const [currencyOrCryptoSearch, setCurrencyOrCryptoSearch] = useState('');

  const getColor = useMemo(() => {
    if (mode === 'dark' || mode === 'light') {
      return isHovered ? Color.yellow : Color.gray_dark;
    }
    return isHovered ? Color.blue : Color.gray;
  }, [mode, isHovered]);

  const handleChangeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Altera o idioma com o i18n
    localStorage.setItem('language', lang); // Armazena o idioma no localStorage
    setOpen(false); // Fecha o menu após a seleção
  };

  const handleCurrencyChange = (currency) => {
    setSelectCurrency(currency);
    setOpen(false); // Fechar o menu após selecionar uma moeda
  };

  const resetFilters = () => {
    setLanguageSearch('');
    setCryptoSearch('');
    setCurrencySearch('');
    setCurrencyOrCryptoSearch('');
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

  const filteredCryptos = cryptoCurrencies.filter(crypto =>
    crypto.name.toLowerCase().includes(cryptoSearch.toLowerCase())
  );

  const filteredCurrencies = fiduciaryCurrencies.filter(currency =>
    currency.name.toLowerCase().includes(currencySearch.toLowerCase())
  );

  // Combine crypto and currency into a single list
  const combinedCurrencies = [...cryptoCurrencies, ...fiduciaryCurrencies].filter(item =>
    item.name.toLowerCase().includes(currencyOrCryptoSearch.toLowerCase())
  );

  return (
    <div 
      className='Change_Language_And_Currency'
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
      <div className={`Language_Currency_Options ${open ? 'active' : 'inactive'}`}>
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
        <div className='Currency_Selector'>
          <div className='Title'>
            <span>{t('Crypto')}</span>
          </div>
          <div className='Input_Field'>
            <Base_Input 
              inputTypeStyle='type1' 
              placeholder={t('Search')}
              value={cryptoSearch}
              onChange={(e) => setCryptoSearch(e.target.value)}
            />
          </div>
          <ul>
            {filteredCryptos.map(crypto => (
              <li key={crypto.name} onClick={() => handleCurrencyChange(crypto.value)}>
                <span>{crypto.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='Crypto_Selector'>
          <div className='Title'>
            <span>{t('Currency')}</span>
          </div>
          <div className='Input_Field'>
            <Base_Input 
              inputTypeStyle='type1' 
              placeholder={t('Search')}
              value={currencySearch}
              onChange={(e) => setCurrencySearch(e.target.value)}
            />
          </div>
          <ul>
            {filteredCurrencies.map(currency => (
              <li key={currency.name} onClick={() => handleCurrencyChange(currency.value)}>
                <span>{currency.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className='Currency_Or_Crypto_Selector'>
          <div className='Title'>
            <span>{t('Currency or Crypto')}</span>
          </div>
          <div className='Input_Field'>
            <Base_Input 
              inputTypeStyle='type1' 
              placeholder={t('Search')}
              value={currencyOrCryptoSearch}
              onChange={(e) => setCurrencyOrCryptoSearch(e.target.value)}
            />
          </div>
          <ul>
            {combinedCurrencies.map(item => (
              <li key={item.name} onClick={() => handleCurrencyChange(item.value)}>
                <span>{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Change_Language_And_Currency;
