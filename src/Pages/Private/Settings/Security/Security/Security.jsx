import React from 'react';
import './Security.scss';
import { useTranslation } from 'react-i18next';
import Simple_Button from '../../../../../Components/Buttons/Simple_Button/Simple_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import useFetchCreateValidationToken from '../../../../../Hooks/Reset_Password/useFetchCreateValidationToken';

const Security = () => {

  const { t } = useTranslation();

  const { fetchCreateValidationToken } = useFetchCreateValidationToken();

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
                <span>{t('Email')}</span>
                <span>{t('Use your email to protect your account and transactions.')}</span>
              </div>
              <div>
                <span>tt...@gmail.com</span>
                <div>
                  <Simple_Button 
                    Text={t('Manage')}
                  />
                </div>
              </div>
            </li>
            <li>
              <div>
                <span>{t('Login Password')}</span>
                <span>{t('Login password is used to log in to your account.')}</span>
              </div>
              <div>
                <div>
                  <Simple_Button 
                    Text={t('Manage')}
                    onClick={fetchCreateValidationToken}
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