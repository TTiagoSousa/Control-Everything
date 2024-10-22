import { useEffect, useState } from 'react';
import { GlobalState } from '../../Contexts/Global_Context';
import { DataBaseState } from '../../Contexts/DataBase_Context';
import http from '../../Services/httpService';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { NavsState } from '../../Contexts/Navs_Context';
import brokersData from '../../Constants/brokersData';

export const useAddApiKey = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { setAlert } = NavsState();

  const [authorizedBrokerId, setAuthorizedBrokerId] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [secretKey, setSecretKey] = useState('');

  const { authenticated, userId } = DataBaseState();

  const addApiKey = async () => {
    console.log('Entrou')
    // Validação inicial
    if (!authorizedBrokerId) {
      setAlert({
        open: true,
        message: t("Por favor, selecione uma corretora"),
        type: 'error'
      });
      return;
    }

    console.log('Erro de selcione a corretor - certo')

    if (!apiKey) {
      setAlert({
        open: true,
        message: t("A chave de API é obrigatória"),
        type: 'error'
      });
      return;
    }

    console.log('A chave de API é obrigatória - certo')

    // Obtém detalhes da corretora para verificar os requisitos
    const broker = brokersData.find(b => b.id === authorizedBrokerId);

    if (!broker) {
      setAlert({
        open: true,
        message: t("Corretora não encontrada"),
        type: 'error'
      });
      return;
    }

    console.log('Corretora não encontrada - certo' +  authorizedBrokerId)

    // Validação com base nos requisitos da corretora
    if (broker.requires.includes('secretKey') && !secretKey) {
      setAlert({
        open: true,
        message: t("A chave secreta é obrigatória para esta corretora"),
        type: 'error'
      });
      return;
    }

    try {

      const response = await http.post(`user-apis/${userId}/add-new-api-connection`, {
        authorizedBrokerId: authorizedBrokerId,
        apiKey: apiKey,
        secretKey: secretKey,
      });

      setAlert({
        open: true,
        message: t("Chave de API adicionada com sucesso"),
        type: 'success'
      });

      // Opcional: navegar para outra página ou atualizar o estado
      setTimeout(() => {
        navigate('/CE/Settings/APIs');
      }, 3000);

    } catch (error) {
      console.log(error)
      if (error.response) {
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
    authorizedBrokerId, setAuthorizedBrokerId,
    apiKey, setApiKey,
    secretKey, setSecretKey,
    addApiKey
  };
};