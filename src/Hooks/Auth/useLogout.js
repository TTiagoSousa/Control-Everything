import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { useNavigate } from 'react-router-dom';
import * as jwt_decode from "jwt-decode";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { DataBaseState } from "../../Contexts/DataBase_Context";
import { TOKEN_COOKIE_NAME, USER_ID_COOKIE_NAME } from '../../config/cookies';

export const useLogout = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();

  const { setAlert } = NavsState();

  const {
    authenticated, setAuthenticated,
    userId, setUserID,
  } = DataBaseState();

  const logout = async () => {

    Cookies.remove(TOKEN_COOKIE_NAME);
    Cookies.remove(USER_ID_COOKIE_NAME);

    setAuthenticated(false);
    setUserID(null);

    navigate('/');

    // Exibir alerta
    setAlert({
      open: true,
      message: 'Logged out successfully.',
      type: 'info',
    });
  }

  return {
    logout
  }
}