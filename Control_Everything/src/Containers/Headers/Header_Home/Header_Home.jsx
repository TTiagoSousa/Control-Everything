
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Header_Home.scss';
import * as Component from '../../../Imports/components';
import * as Container from '../../../Imports/containers';
import * as Color from '../../../Styles/Colors';
import { Sling as Hamburger } from 'hamburger-react';

const Header_Home = () => {

  return (
    <>
      <header className='Header_Home'>
        <div className="Left_Side">
          <div className="Menu">
            <Hamburger  
              size={20}
              color={Color.blue}
            />
          </div>
        </div>
        <div className="Right_Side">
          <div className='Theme_Button'>
            <Component.Change_Theme />
          </div>
        </div>
      </header>
    </>
  )
};

export default Header_Home;