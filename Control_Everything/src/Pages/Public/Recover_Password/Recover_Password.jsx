// React and scss
  import React, { useState } from 'react';
  import './Recover_Password.scss';
  import { Link, useParams, useNavigate } from 'react-router-dom';
// React and scss

// Internal Imports
  import * as Component from '../../../Imports/Components';
  import * as Image from '../../../Imports/Assets';
// Internal Imports

// Contexts
  import { GlobalState } from '../../../Contexts/Global_Context';
// Contexts

// Api
  import axios from 'axios';
// APi

const Recover_Password = () => {

  const { setAlert } = GlobalState();

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { token } = useParams();
  const decodedToken = atob(token);

  const handleChangePassword = async () => {
    try {

      if (password !== confirmPassword) {
        setAlert({
          open: true,
          message: "Password changed successfully",
          type: 'error'
        });
      }

      await axios.post(`http://192.168.0.121:3000/auth/reset-password/${decodedToken}`, {
        newPassword: password,
      });

      setAlert({
        open: true,
        message: "Email to activate account sent",
        type: 'success'
      });

      setTimeout(() => {
        navigate('/Auth');
        window.location.reload();
      }, 3000);

    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 400){
        const errorMessage = error.response.data.message;
        if (errorMessage === 'Passwords Weak') {
          setAlert({
            open: true,
            message: "Passwords Weak",
            type: 'error'
          });
        }
      }
    }
  };
  

  return (
    <>
      <div className='Recover_Password'>
        <div className="Forms_Container">
          <div className="Recover_Password_Form">
            <form action="">
              <h1>Recover Password</h1>
              <div className="Input_Field">
                <Component.Global_Input 
                  Text="Password"
                  Type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="Input_Field">
                <Component.Global_Input 
                  Text="Repete Password"
                  Type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              <div className="Input_Field">
                <Component.Global_Button 
                  Text="Change Password"
                  onClick={handleChangePassword}
                />
              </div>
            </form>
          </div>
        </div>

        <div className="Panels_Container">
          <div className="Panel Left_Panel">
            <div className="Content">
              <h1>Did you remember your password?</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                ex ratione. Aliquid!
              </p>
              <Link to="/Auth">
                <button className="btn transparent">
                  Back do Login
                </button>
              </Link>
            </div>
            <img src={Image.Web3} className="image"/>
          </div>
        </div>
        <div className='Alert'>
          <Component.Mui_Alert />
        </div>
      </div>
    </>
  )
};

export default Recover_Password;