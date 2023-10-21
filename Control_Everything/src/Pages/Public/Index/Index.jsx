// React and Scss
  import React from 'react';
  import './Index.scss';
  import { Link } from 'react-router-dom';
// React and Scss

// Internal Imports
  import * as Container from '../../../Imports/containers';
// Internal Imports

const Index = () => {

  return (
    <div className='Index'>

      <Container.Header_Home />
      
      <section className='Section_N1'>
        <div className="Title">
          <h1>Welcome to</h1>
          <h1>Control Everything</h1>
        </div>
      </section>

    </div>
  )
}

export default Index;