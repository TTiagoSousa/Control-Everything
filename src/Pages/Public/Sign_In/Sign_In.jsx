import React, { useState } from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../Components/Inputs/Global_Input/Global_Input';
import * as Video from '../../../Imports/video';
import { Link } from 'react-router-dom';
import Global_Button from  '../../../Components/Buttons/Global_Button/Global_Button';
import Change_Language from '../../../Containers/Selectors/Change_Language/Change_Language';
import Mui_Alert from '../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useSignin } from '../../../Hooks/Auth/useSignin';

const Sign_In = () => {

  const { t } = useTranslation();

  const { 
    signin, 
    email, setEmail, 
    password, setPassword 
  } = useSignin();

  const [loading, setLoading] = useState(false);
  const handleSignIn = async () => {
    setLoading(true);
    try {
      await signin(); // Assumindo que `signup` retorna uma Promise
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='Sign_In'>

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
            <Change_Language />
          </div>
        </header>

        <form>
          <div className="Title">
            <span>{t('Sign in')}</span>
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
          <div className="Button_Field">
            <Global_Button 
              text={loading ? t('Loading...') : t('Sign in')}
              type="button"
              onClick={handleSignIn}
              disabled={loading}
            />
          </div>
        </form>

        <div className='Info'>
          <div className='Reset'>
            <span>{t('Forgot your password ?')}</span>
            <Link to="/Recover_Password">{t('Reset password')}</Link>
          </div>
          <div>
            <span>{t("Don't have an account ?")}</span>
            <Link to="/Sign_Up">{t('Sign Up')}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sign_In;