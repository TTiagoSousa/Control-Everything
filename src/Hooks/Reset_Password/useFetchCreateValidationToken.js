import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';
import { NavsState } from '../../Contexts/Navs_Context';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const useFetchCreateValidationToken = () => {

  const { t } = useTranslation();

  const { authenticated, userId } = DataBaseState();
  const { setAlert } = NavsState();

  const navigate = useNavigate();

  const fetchCreateValidationToken = async () => {

    try {
      const response = await http.post(`password-reset/${userId}/request-token`);

      setAlert({
        open: true,
        message: t("Email sent with confirmation code"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE/Settings/Security/Manage_Password');

      }, 3000);

    } catch (error) {

      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.message;
        // Assuming you have a translation function
        errorMessage = t(errorMessage);
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error',
        });
      }
    }
  };

  return { fetchCreateValidationToken };
};

export default useFetchCreateValidationToken;