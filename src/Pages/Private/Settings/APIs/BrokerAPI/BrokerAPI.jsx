// BrokerAPI.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import brokersData from '../../../../../Constants/brokersData';
import Base_Input from '../../../../../Components/Inputs/Base_Input/Base_Input';
import './BrokerAPI.scss';
import Global_Button from '../../../../../Components/Buttons/Global_Button/Global_Button';
import Mui_Alert from '../../../../../Components/Alerts/Mui_Alert/Mui_Alerts';
import { useAddApiKey } from '../../../../../Hooks/Apis/useConnectNewBrocker';

const BrokerAPI = () => {
  const { t } = useTranslation();
  const { brokerName } = useParams();

  // Estado de carregamento
  const [loading, setLoading] = useState(false);

  // Encontra a corretora pelo nome
  const broker = brokersData.find(b => b.name === brokerName);

  if (!broker) {
    return <div>{t('Corretora não encontrada')}</div>;
  }

  const {
    authorizedBrokerId, setAuthorizedBrokerId,
    apiKey, setApiKey,
    secretKey, setSecretKey,
    addApiKey
  } = useAddApiKey();

  // Define o authorizedBrokerId com base na corretora selecionada
  useEffect(() => {
    setAuthorizedBrokerId(broker.id);
  }, [broker.id, setAuthorizedBrokerId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Ativa o estado de carregamento
    await addApiKey(); // Aguarda a finalização da requisição
    setLoading(false); // Desativa o estado de carregamento
  };

  return (
    <div className='BrokerAPI'>

      <div className="Alert">
        <Mui_Alert />
      </div>

      <div className='Content'>
        <div className='Title'>
          <span>{t(`Conectar API - ${broker.name}`)}</span>
        </div>
        <form>
          {broker.requires.includes('key') && (
            <div className='Input_Field'>
              <Base_Input 
                type='text'
                placeholder={t('Insira sua chave de API')}
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                inputTypeStyle='type2'
              />
            </div>
          )}
          {broker.requires.includes('secretKey') && (
            <div className='Input_Field'>
              <Base_Input 
                type='text'
                placeholder={t('Insira sua chave secreta de API')}
                value={secretKey}
                onChange={(e) => setSecretKey(e.target.value)}
                inputTypeStyle='type2'
              />
            </div>
          )}
          <div className="Button_Field">
            <Global_Button 
              onClick={handleSubmit}
              text={loading ? t('Loading...') : t('Submit')}
              disabled={loading}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrokerAPI;
