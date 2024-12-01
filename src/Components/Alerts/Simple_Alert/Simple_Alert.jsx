import React, { useRef, useEffect } from 'react';
import { Toast } from 'primereact/toast';
import { NavsState } from '../../../Contexts/Navs_Context'; // Ajuste o caminho conforme necessário
import './Simple_Alert.scss';

const Simple_Alert = () => {
  const toast = useRef(null);
  const { alert, setAlert } = NavsState();

  useEffect(() => {
    if (alert.open) {
      toast.current.show({
        severity: alert.type,
        summary: alert.type.charAt(0).toUpperCase() + alert.type.slice(1),
        detail: alert.message,
        life: 200000,
      });
      // Reseta o alerta após exibir
      setAlert({ ...alert, open: false });
    }
  }, [alert, setAlert]);

  return <Toast ref={toast} />;
};

export default Simple_Alert;