import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';
import { NavsState } from '../../Contexts/Navs_Context';
import { useTranslation } from 'react-i18next';

const useFetchValidateResetPasswordToken = (token) => {

  const { t } = useTranslation();

  const { authenticated, userId } = DataBaseState();
  const { setAlert } = NavsState();
  const [ isValid, setIsValid ] = useState(false);

  const fetchValidateResetPasswordToken = async () => {

    if (!token) {
      setAlert({
        open: true,
        message: t("All fields are required"),
        type: 'error'
      });
      
      return;
    }

    try {
      const response = await http.get(`password-reset/${userId}/validate/${token}`);
      setIsValid(response.data);

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

  return { isValid, fetchValidateResetPasswordToken };
};

export default useFetchValidateResetPasswordToken;