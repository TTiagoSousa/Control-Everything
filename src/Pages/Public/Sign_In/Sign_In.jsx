import React, { useState } from 'react';
import './Sign_In.scss';
import { useTranslation } from 'react-i18next';
import Simple_Input_And_Lable from '../../../Components/Inputs/Simple_Input_And_Lable/Simple_Input_And_Lable';
import { Link } from 'react-router-dom';
import Simple_Button from '../../../Components/Buttons/Simple_Button/Simple_Button';
import * as Video from '../../../Imports/video';
import Change_Theme from '../../../Components/Buttons/Change_Theme/Change_Theme';
import { useSignin } from '../../../Hooks/Auth/useSignin';
import Change_Language from '../../../Containers/Selectors/Change_Language/Change_Language';
import Simple_Alert from '../../../Components/Alerts/Simple_Alert/Simple_Alert';

const Sign_In = () => {

  const { t } = useTranslation();

  const {
    email, setEmail,
    password, setPassword,
    signin
  } = useSignin();

    // Disable button if any field is empty
    const [isLoading, setIsLoading] = useState(false);

    // Handle form submission
    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      try {
        await signin();
      } finally {
        setIsLoading(false);
      }
    };
  
    // Disable button if any field is empty or while loading
    const isDisabled = !email || !password || isLoading;

  return (
    <div className='Sign_In'>

      <div className='Alert'>
        <Simple_Alert />
      </div>

      <div className="Left_Side">
        <video autoPlay loop muted>
          <source src={Video.Mounth} type='video/mp4'/>
        </video>
      </div>
      <div className="Right_Side">
        <header>
          <div className='Button_Field'>
            <Change_Theme />
          </div>
          <div className='Button_Field'>
            <Change_Language />
          </div>
        </header>
        <form action="">
          <div className="Title">
            <span>{t('Account Login')}</span>
          </div>
          <div className="Input_Field">
            <Simple_Input_And_Lable 
              label_text={t('Email')}
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Input_Field">
            <Simple_Input_And_Lable 
              type='password'
              label_text={t('Password')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="Check_FIeld_Forgot_Password">
            <div>
              <input type='checkbox'></input>
              <span>{t('Remember me')}</span>
            </div>
            <div>
              <Link to="/Recover_Password">{t('Forgot Password ?')}</Link>
            </div>
          </div>
          <div className="Button_Field">
            <Simple_Button 
              text={isLoading ? t('Loading...') : t('Sign in')}
              disabled={isDisabled}
              onClick={handleSubmit}
            />
          </div>
        </form>
        <div className='Links'>
          <span>{t('Dont have an account yet ? -')}</span>
          <Link to='/Sign_Up'>{t('Click here')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Sign_In;