import React, { useState, useRef } from 'react';
import './APIs.scss'; 
import * as Image from '../../../../../Imports/imgs';
import { useTranslation } from 'react-i18next';
import Base_Input from '../../../../../Components/Inputs/Base_Input/Base_Input';
import brokersData from '../../../../../Constants/brokersData';
import { useNavigate } from 'react-router-dom';

const APIs = () => {

  const { t } = useTranslation();

  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Ordena as corretoras por nome
  const sortedBrokers = brokersData.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Filtra as corretoras com base no termo de pesquisa
  const filteredBrokers = sortedBrokers.filter((broker) =>
    broker.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleBrokerClick = (brokerName) => {
    navigate(`/CE/Settings/APIs/${brokerName}`);
  };
  return (
    <div className='APIs'>
      <div className='Title'>
        <span>{t('Connect Your Broker')}</span>
      </div>
      <div className='Info'>
        <span>{t('Connecting your brokers API to my website makes it easier to monitor your investments in real-time, with automatic data and personalized analyses, helping you make better financial decisions.')}</span>
      </div>
      <div className='Content'>
        <div className='Input_Field'>
          <Base_Input 
            type='text'
            placeholder={t('Pesquisar corretora')}
            value={searchTerm}
            onChange={handleSearchChange}
            inputTypeStyle='type2'
          />
        </div>
        <div className='Broker_List'>
          {filteredBrokers.map((broker) => (
            <div 
              key={broker.id} 
              className='Broker_Item' 
              onClick={() => handleBrokerClick(broker.name)}
            >
              <img src={broker.image} alt={broker.name} className='BrokerImage' />
              <span className='BrokerName'>{broker.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default APIs;