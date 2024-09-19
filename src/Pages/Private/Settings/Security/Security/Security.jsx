import React, { useState } from 'react';
import './Security.scss';
import { useTranslation } from 'react-i18next';
import Simple_Button from '../../../../../Components/Buttons/Simple_Button/Simple_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import useFetchCreateValidationToken from '../../../../../Hooks/Reset_Password/useFetchCreateValidationToken';

const Security = () => {

  const { fetchCreateValidationToken } = useFetchCreateValidationToken();

  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento do botão

  const { t } = useTranslation();

  const handleClick = async () => {
    setIsLoading(true); 
    try {
      await fetchCreateValidationToken();
    } finally {
      setIsLoading(false); // Garante que o isLoading seja setado para false, independente do resultado
    }
  };

  return (
    <div className='Security'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <section className='Authentication'>
        <div className='Header'>
          <h1>{t('Authentication')}</h1>
        </div>  
        <div className='Body'>
          <ul>
            <li>
              <div>
                <span>{t('Login Password')}</span>
                <span>{t('Login password is used to log in to your account.')}</span>
              </div>
              <div>
                <div>
                  <Simple_Button 
                    text={isLoading ? t('Please wait...') : t('Manage')} 
                    buttonStyle="type1" 
                    onClick={handleClick} 
                  />
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>  
    </div>
  )
};

export default Security;