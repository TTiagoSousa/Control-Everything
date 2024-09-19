import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { isPasswordStrong } from '../../Utils/password/is.password.strong';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { DataBaseState } from "../../Contexts/DataBase_Context";

export const useUpdatePassword = (token) => {

  const { t } = useTranslation();

  const { authenticated, userId } = DataBaseState();
  const { setAlert } = NavsState();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigate = useNavigate();

  const updatePassword = async (e) => {
    e.preventDefault();

    if ( !password ||  !confirmPassword) {
      setAlert({
        open: true,
        message: t("All fields are required"),
        type: 'error'
      });

      return;
    }

    if (!isPasswordStrong(password)) {
      setAlert({
        open: true,
        message: t("Password is too weak"),
        type: 'error'
      });

      return;
    }

    if (password !== confirmPassword) {
      setAlert({
        open: true,
        message: t("Passwords do not match"),
        type: 'error'
      });

      return;
    }

    try {

      const response = await http.patch(`user/${userId}/update-password`, {
        password: password,
        confirmPassword: confirmPassword,
        token: token
      });

      setAlert({
        open: true,
        message: t("Password changed successfully"),
        type: 'success'
      });

      setTimeout(() => {
        navigate('/CE/Settings/Security');
      }, 3000);
      
    } catch (error) {
      if (error.response && error.response.status === 400) {
        let errorMessage = error.response.data.message;
        errorMessage = t(errorMessage);
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  };


  return {
    password, setPassword,
    confirmPassword, setConfirmPassword,
    updatePassword
  };
};