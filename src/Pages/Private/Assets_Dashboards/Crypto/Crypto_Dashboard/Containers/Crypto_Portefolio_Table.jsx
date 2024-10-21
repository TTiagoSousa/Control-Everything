import React, { useEffect, useState } from 'react';
import useFetchCryptoPortefolio from '../../../../../../Hooks/Crypto_Transitions/useFetchCryptoPortefolio';
import { useTranslation } from 'react-i18next';
import '../Crypto_Dashboard.scss';
import { LinearProgress } from '@mui/material';
import * as Color from '../../../../../../Styles/Colors';
import useLoading from '../../../../../../Hooks/Loading/useLoading';

const Crypto_Portefolio_Table = () => {

  const { t } = useTranslation();

  const { cryptoList, serCryptoList } = useFetchCryptoPortefolio();
  const { isLoading, setIsLoading } = useLoading();

  console.log(cryptoList)
  
  useEffect(() => {
    if (cryptoList) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
  }, [cryptoList, setIsLoading]);


  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    let newExpandedRows = [...expandedRows];
    const currentIndex = newExpandedRows.indexOf(index);

    if (currentIndex === -1) {
      newExpandedRows = [index];
    } else {
      newExpandedRows.splice(currentIndex, 1);
    }

    setExpandedRows(newExpandedRows);
  };

  const isRowExpanded = (index) => {
    return expandedRows.includes(index);
  };

  return (
    <div className='Table_Wrapper'>
      <table>
        <thead>
          <tr>
            <th className='Crypto'><span>{t('Crypto')}</span></th>
            <th className='Price'><span>{t('Price')}</span></th>
            <th className='Average_Price'><span>{t('Average price')}</span></th>
            <th className='Price_Average_Price'><span>{t('Price / Average price')}</span></th>
            <th className='Total_Spent'><span>{t('Total spent')}</span></th>
            <th><span>{t('Current investment')}</span></th>
            <th className='Return'><span>{t('Return')}</span></th>
            <th className='ReturnP'><span>{t('Return %')}</span></th>
            <th className='Quantity_Purchased'><span>{t('Quantity purchased')}</span></th>
          </tr>
        </thead>
        <tbody>
          {!isLoading && cryptoList && cryptoList.length === 0 ? 
            (
              <tr>
                <td colSpan="3"><span>{t('No transitions')}</span></td>
              </tr>
            )
          :
            (
              <>
                {!isLoading && ( 
                  <>
                    {cryptoList &&
                      cryptoList.map((crypto, index) => (
                        <React.Fragment key={crypto.cryptoID}>
                          <tr 
                            key={crypto.cryptoID}
                          >
                            <div className='Crypto_Info'>
                              <td className='Crypto'>
                                <img src={crypto.cryptoImage} alt="" />
                                <span>{crypto.cryptoName}</span>
                                <span>{crypto.cryptoSymbol}</span>
                              </td>
                              <td className='Price'>
                                <span>{crypto.currentPrice}</span>
                                <span>{crypto.currencySymbol}</span>
                              </td>
                              <td 
                                className='Average_Price' 
                                style={{ color: crypto.averagePrice < crypto.currentPrice ? Color.green : Color.red }}
                              >
                                <span>{crypto.averagePrice}</span>
                                <span>{crypto.currencySymbol}</span>
                              </td>
                              <td className='Price_Average_Price'>
                                <div>
                                  <span>{crypto.currentPrice}</span>
                                  <span>{crypto.currencySymbol}</span>
                                </div>
                                <span>/</span>
                                <div style={{ color: crypto.averagePrice < crypto.currentPrice ? Color.green : Color.red }}>
                                  <span>{crypto.averagePrice}</span>
                                  <span>{crypto.currencySymbol}</span>
                                </div>
                              </td>
                              <td className='Total_Spent'>
                                <span>{crypto.totalSpendInUSD}</span>
                                <span>{crypto.currencySymbol}</span>
                              </td>
                              <td 
                                className='Current_Investment' 
                                style={{ color: crypto.currentInvestment > crypto.totalSpendInUSD ? Color.green : Color.red }}
                              >
                                <span>{crypto.currentInvestment}</span>
                                <span>{crypto.currencySymbol}</span>
                              </td>
                              <td 
                                className='Return'
                                style={{ color: crypto.currentReturn > 0 ? Color.green : Color.red }}
                              >
                                <span>{crypto.currentReturn}</span>
                                <span>{crypto.currencySymbol}</span>
                              </td>
                              <td 
                                className='ReturnP' 
                                style={{ color: crypto.returnPercentage === "Infinity" || crypto.returnPercentage > 0 ? Color.green : Color.red }}
                              >
                                <span>{crypto.returnPercentage}</span>
                                <span>%</span>
                              </td>
                              <td className='Quantity_Purchased'>
                                <span>{crypto.quantityPurchased}</span>
                                <span>{crypto.cryptoSymbol}</span>
                              </td>
                            </div>
                            <div className='Extra_Info'>
                              <span onClick={() => toggleRow(index)}>{t('More info')}</span>
                            </div>
                            {isRowExpanded(index) && (
                              <tr className="Extra_Content">
                                <td className='Price'>
                                  <span>{t('Average price')}</span>
                                  <div style={{ color: crypto.averagePrice < crypto.currentPrice ? Color.green : Color.red }}>
                                    <span>{crypto.averagePrice}</span>
                                    <span>{crypto.currencySymbol}</span>
                                  </div>
                                </td>
                                <td className='Average_Price'>
                                  <span>{t('Average price')}</span>
                                  <div style={{ color: crypto.averagePrice < crypto.currentPrice ? Color.green : Color.red }}>
                                    <span>{crypto.averagePrice}</span>
                                    <span>{crypto.currencySymbol}</span>
                                  </div>
                                </td>
                                <td className='Quantity_Parchased'>
                                  <span>{t('Quantity purchased')}</span>
                                  <div>
                                    <span>{crypto.quantityPurchased}</span>
                                    <span>{crypto.cryptoSymbol}</span>
                                  </div>
                                </td>
                                <td className='Return'>
                                  <span>{t('Return')}</span>
                                  <div style={{ color: crypto.currentReturn > 0 ? Color.green : Color.red }}>
                                    <span>{crypto.currentReturn}</span>
                                    <span>{crypto.currencySymbol}</span>
                                  </div>
                                </td>
                              </tr>
                            )}
                          </tr>
                        </React.Fragment>
                      )
                    )}
                  </>
                )}   
              </>
            )
          }
        </tbody>
        {isLoading && 
          <tfoot>
            <tr>
              <td >
                  <LinearProgress />
              </td>
            </tr>
          </tfoot>
        }
      </table>
    </div>
  );
};

export default Crypto_Portefolio_Table;