import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavsState } from './Navs_Context';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';

const DataBase = createContext({});

const TOKEN_COOKIE_NAME = 'rthtrh3445gv@@firnf1rgher';
const USER_ID_COOKIE_NAME = 'agerg3234rrthrts322455';

const DataBaseContext = ({ children }) => {

  const navigate = useNavigate();
  const { setAlert } = NavsState();

  const [authenticated, setAuthenticated] = useState(false);
  const [userId, setUserID] = useState(null);

  const handleTokenExpiration = useCallback(() => {
    Cookies.remove(TOKEN_COOKIE_NAME);
    Cookies.remove(USER_ID_COOKIE_NAME);

    setAuthenticated(false);
    setUserID(null);

    navigate('/');

    setAlert({
      open: true,
      message: 'Session expired. Please log in again.',
      type: 'warning',
    });
  }, [navigate, setAlert]);

  const checkAuthentication = useCallback(() => {
    const token = Cookies.get(TOKEN_COOKIE_NAME);
    const id = Cookies.get(USER_ID_COOKIE_NAME);

    if (token) {
      try {
        const decoded = jwt_decode.jwtDecode(token);
        const { exp } = decoded;
        const currentTime = Math.floor(Date.now() / 1000);

        if (exp < currentTime) {
          handleTokenExpiration();
        } else {
          setUserID(id);
          setAuthenticated(true);
        }
      } catch (error) {
        handleTokenExpiration();
      }
    } else {
      setAuthenticated(false);
    }
  }, [handleTokenExpiration]);

  useEffect(() => {
    checkAuthentication();
  }, [checkAuthentication]);

  return (
    <DataBase.Provider
      value={{
        authenticated, setAuthenticated,
        userId, setUserID,
      }}
    >
      {children}
    </DataBase.Provider>
  );
};

export default DataBaseContext;

export const DataBaseState = () => {
  return useContext(DataBase);
};