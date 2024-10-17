import React from 'react';
import './Index.scss';
import Header_Index from '../../../Containers/Headers/Header_Index/Header_Index';
import * as Icon from '../../../Imports/icons';
import * as Color from '../../../Styles/Colors';
import { useTranslation } from 'react-i18next';

const Index = () => {

  const { t } = useTranslation();

  return (
    <div className='Index'>

      <Header_Index />

      <div className='Apresatation'>
        <div className='Title'>
          <span>Control Everything</span>
          <span>{t('Master your money, master your future')}</span>
        </div>
      </div>

      <div className='Image'>
        <div className='Left'></div>
        <div className='Phone'>
          <div className='Screen'>
            <span>1034</span>
            <span>$</span>
          </div>
          <div className='Mini_Charts'>
            <div className='Tabs'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='Charts'>
              <div className='Icon'>
                <Icon.Line_Chart_Positive Global_Color={Color.green}/>
              </div>
              <div className='Icon'>
                <Icon.Line_Chart_Negative Global_Color={Color.red}/>
              </div>
              <div className='Icon'>
                <Icon.Line_Chart_Positive Global_Color={Color.green}/>
              </div>
            </div>
          </div>
          <div className='Bar_Chart_One'>
            <div className='Top'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div className='Line'></div>
            <div className='Bottom'>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
          <div className='Bar_Chart_Two'>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className='Menu'>
            <div>
              <span>{t('Portfolio')}</span>
            </div>
            <div>
              <span>{t('Crypto')}</span>
            </div>
            <div>
              <span>{t('Savings')}</span>
            </div>
          </div>
        </div>
        <div className='Right'></div>
      </div>
    </div>
  )
};

export default Index;