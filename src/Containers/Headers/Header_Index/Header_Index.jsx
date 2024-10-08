import React from 'react';
import './Header_Index.scss';
import Change_Language_And_Currency from '../../Selectors/Change_Language_And_Currency/Change_Language_And_Currency';
import { useTranslation } from 'react-i18next';
import { DataBaseState } from '../../../Contexts/DataBase_Context';
import Simple_Button from '../../../Components/Buttons/Simple_Button/Simple_Button';

const Header_Index = () => {

  const { t } = useTranslation();

  const { authenticated } = DataBaseState();

  return (
    <div className='Header_Index'>
      <div className="Left_Side">
        <span>Control Everytinhg</span>
      </div>
      <div className="Right_Side">
        {authenticated ?
          <>
            <div className="Button_Field">
              <Simple_Button 
                text={t('Back to dashboard')}
                buttonStyle='type2'
                to='CE/Dashboard'
              />
            </div>
          </>
          :
          <>
            <div className="Button_Field">
              <Simple_Button 
                text={t('Sign in')}
                buttonStyle='type1'
                to='Sign_In'
              />
            </div>
            <div className="Button_Field">
              <Simple_Button 
                text={t('Sign up')}
                buttonStyle='type2'
                to='Sign_Up'
              />
            </div>
          </>
        }
        <div className="Selector_Field">
          <Change_Language_And_Currency />
        </div>
      </div>
    </div>
  )
}

export default Header_Index;