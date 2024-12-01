import React, { useState } from 'react';
import './Sign_up.scss';
import * as Video from '../../../Imports/video';
import Simple_Input_And_Lable from '../../../Components/Inputs/Simple_Input_And_Lable/Simple_Input_And_Lable';
import Simple_Button from '../../../Components/Buttons/Simple_Button/Simple_Button';
import Change_Theme from '../../../Components/Buttons/Change_Theme/Change_Theme';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Change_Language from '../../../Containers/Selectors/Change_Language/Change_Language';
import { useSignup } from '../../../Hooks/Auth/useSignup';
import Simple_Alert from '../../../Components/Alerts/Simple_Alert/Simple_Alert';

const Sign_up = () => {
  
  const { t } = useTranslation();

  const { 
    signup,
    email, setEmail,
    password, setPassword,
    confirmPassword, setConfirmPassword,
    terms, setTerms
  } = useSignup();

  // Disable button if any field is empty
  const [isLoading, setIsLoading] = useState(false);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await signup();
    } finally {
      setIsLoading(false);
    }
  };

  // Disable button if any field is empty or while loading
  const isDisabled = !email || !password || !confirmPassword || !terms || isLoading;

  return (
    <div className='Sign_up'>

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
        <form>
          <div className="Title">
            <span>{t('Register')}</span>
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
          <div className="Input_Field">
            <Simple_Input_And_Lable 
              type='password'
              label_text={t('Repeat password')}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <div className="Check_FIeld_Forgot_Password">
            <div>
              <input 
                type='checkbox'
                checked={terms}
                onChange={(e) => setTerms(e.target.checked)}
              ></input>
              <span>{t('Accept the terms')}</span>
            </div>
          </div>
          <div className="Button_Field">
            <Simple_Button
              text={isLoading ? t('Loading...') : t('Sign up')}
              disabled={isDisabled}
              onClick={handleSubmit}
            />
          </div>
        </form>
        <div className='Links'>
          <span>{t('Already have a account ? -')}</span>
          <Link to="/Sign_In">{t('Click here')}</Link>
        </div>
      </div>
    </div>
  )
}

export default Sign_up