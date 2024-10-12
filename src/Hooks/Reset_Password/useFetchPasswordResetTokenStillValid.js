import { useState, useEffect } from 'react';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';
import { NavsState } from '../../Contexts/Navs_Context';
import { useTranslation } from 'react-i18next';

const useFetchPasswordResetTokenStillValid = () => {

  const { t } = useTranslation();

  const { authenticated, userId } = DataBaseState();
  const { setAlert } = NavsState();
  const [ isValid, setIsValid ] = useState(false);

  const fetchPasswordResetTokenStillValid = async () => {

    try {
      const response = await http.get(`password-reset/${userId}/is-password-still-valid`);
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

  return { isValid, fetchPasswordResetTokenStillValid };
};

export default useFetchPasswordResetTokenStillValid;