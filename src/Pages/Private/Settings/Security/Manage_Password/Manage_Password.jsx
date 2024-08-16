import React, { useEffect, useState } from 'react';
import './Manage_Password.scss';
import { useTranslation } from 'react-i18next';
import Global_Input from '../../../../../Components/Inputs/Global_Input/Global_Input';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import useFetchValidateResetPasswordToken from '../../../../../Hooks/Reset_Password/useFetchValidateResetPasswordToken';
import * as Icon from '../../../../../Imports/icons';
import * as Color from '../../../../../Styles/Colors';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useUpdatePassword } from '../../../../../Hooks/Reset_Password/useUpdatePassword';

const Manage_Password = () => {

  const { t } = useTranslation();

  const[ token, setToken] = useState()

  const { isValid, fetchValidateResetPasswordToken } = useFetchValidateResetPasswordToken(token);
  
  const {
    password, setPassword,
    confirmPassword, setConfirmPassword,
    updatePassword 
  } = useUpdatePassword(token)

  const [step, setStep] = useState('verifyCode');

  useEffect(() => {
    if (isValid) {
      // Proceed to the next step when token is valid
      setStep('resetPassword');
    }
  }, [isValid]);

  const [passwordCriteria, setPasswordCriteria] = useState({
    minLength: false,
    hasUppercase: false,
    hasNumber: false,
    hasSpecialChar: false,
  });
  
  const validatePassword = (password) => {
    setPasswordCriteria({
      minLength: password.length >= 6,
      hasUppercase: /[A-Z]/.test(password),
      hasNumber: /[0-9]/.test(password),
      hasSpecialChar: /[^A-Za-z0-9]/.test(password),
    });
  };

  useEffect(() => {
    validatePassword(password);
  }, [password]);

  return (
    <div className='Manage_Password'>

      <div className='Alert'>
        <Mui_Alert />
      </div>

      <div className="Container">
        <form>
          <div className='Title'>
            <h1>{t('Change password')}</h1>
          </div>
          {step === 'verifyCode' && (
            <>
              <div className='Input_Field'>
                <Global_Input 
                  Type="text"
                  Text={t("Code")}
                  Value={token}
                  onChange={(e) => setToken(e.target.value)}
                />
              </div>
              <div className='Button_Field'>
                <Global_Button 
                  Text={t('Validate code')}
                  onClick={fetchValidateResetPasswordToken}
                />
              </div>
            </>
          )}
          {step === 'resetPassword' && (
            <>
              <div className='Input_Field'>
                <Global_Input 
                  Type="password"
                  Text={t("Password")}
                  onChange={(e) => setPassword(e.target.value)}
                  Value={password}
                />
              </div>
              <div className='Password_Check'>
                <div>
                  <div><Icon.Simple_Check Global_Color={passwordCriteria.minLength ? Color.green : Color.red_light} /></div>
                  <span style={{ color: passwordCriteria.minLength ? Color.green : Color.red_light }}>
                    The password must be at least 6 characters long
                  </span>
                </div>
                <div>
                  <div><Icon.Simple_Check Global_Color={passwordCriteria.hasUppercase ? Color.green : Color.red_light} /></div>
                  <span style={{ color: passwordCriteria.hasUppercase ? Color.green : Color.red_light }}>
                    The password must contain at least one uppercase letter
                  </span>
                </div>
                <div>
                  <div><Icon.Simple_Check Global_Color={passwordCriteria.hasNumber ? Color.green : Color.red_light} /></div>
                  <span style={{ color: passwordCriteria.hasNumber ? Color.green : Color.red_light }}>
                    The password must contain at least one numeric character
                  </span>
                </div>
                <div>
                  <div><Icon.Simple_Check Global_Color={passwordCriteria.hasSpecialChar ? Color.green : Color.red_light} /></div>
                  <span style={{ color: passwordCriteria.hasSpecialChar ? Color.green : Color.red_light }}>
                    The password must contain at least one special character
                  </span>
                </div>
              </div>
              <div className='Input_Field'>
                <Global_Input 
                  Type="password"
                  Text={t("Confirm password")}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  Value={confirmPassword}
                />
              </div>
              <div className='Button_Field'>
                <Global_Button 
                  Text={t('Confirmar')}
                  onClick={updatePassword}
                />
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
};

export default Manage_Password;