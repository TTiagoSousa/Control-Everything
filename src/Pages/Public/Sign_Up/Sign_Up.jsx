import React, { useState } from 'react';
import './Sign_Up.scss';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import * as Video from '../../../Imports/video';
import Change_Theme from '../../../Containers/Selectors/Change_Theme/Change_Theme';
import { Link } from 'react-router-dom';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Change_Language from '../../../Containers/Selectors/Change_Language/Change_Language';
import { useSignup } from '../../../Hooks/Auth/useSignup';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';

const Sign_Up = () => {

  const { t } = useTranslation();

  const { 
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    signup,
  } = useSignup();

  const [loading, setLoading] = useState(false);
  const handleSignup = async () => {
    setLoading(true);
    try {
      await signup(); // Assumindo que `signup` retorna uma Promise
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Sign_Up'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <div className='Image_Container'>
        <video autoPlay loop muted>
          <source src={Video.Mounth} type='video/mp4'/>
        </video>
      </div>
      <div className='Form_Container'>
        <header>
          <div className='Button_Field'>
            <Change_Theme />
          </div>
          <div className='Button_Field'>
            <Change_Language />
          </div>
        </header>

        <form>
          <div className="Title">
            <span>{t('Sign up')}</span>
          </div>
          <div className="Input_Field">
            <Global_Input 
              text={t('Email')}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              text={t('password')}
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Global_Input 
              text={t('Confirm password')}
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="Button_Field">
            <Global_Button 
              text={loading ? t('Loading...') : t('Sign up')}
              type="button"
              onClick={handleSignup}
              disabled={loading}
            />
          </div>
        </form>

        <div className='Info'>
          <span>{t('Already have a account ?')}</span>
          <Link to="/Sign_In">{t('Sign in')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Sign_Up;