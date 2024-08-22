import React, { useEffect, useState } from 'react';
import useFetchCryptoPortefolio from '../../../../../../Hooks/Crypto_Transitions/useFetchCryptoPortefolio';
import { useTranslation } from 'react-i18next';
import '../Crypto_Dashboard.scss';
import { LinearProgress } from '@mui/material';
import * as Color from '../../../../../../Styles/Colors';

const Crypto_Portefolio_Table = () => {

  const { t } = useTranslation();

  const { cryptoList, serCryptoList } = useFetchCryptoPortefolio(); console.log(cryptoList)

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    const delay = 1500;
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);

  }, []);

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
            <th className="Crypto"><span>{t('Crypto')}</span></th>
            <th className="Current_Price_And_Average_Price"><span>{t('Price')}</span>  <span>/</span> <span>{t('Average price')}</span></th>
            <th className="Total_Spent_And_Current_Investment"><span>{t('Total spent')} / {t('Current investment')}</span></th>
            <th className="Current_Return"><span>{t('Current return')}</span></th>
            <th className="Return_Percentage"><span>{t('Return percentage')}</span></th>
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
                            onClick={() => toggleRow(index)}
                          >
                            <td className='Crypto'>
                              <img src={crypto.cryptoImage} alt="" />
                              <span>{crypto.cryptoName}</span>
                              <span>{crypto.cryptoSymbol}</span>
                            </td>
                            <td className='Current_Price_And_Average_Price'>
                              <div>
                                <span>{crypto.currentPrice}</span>
                                <span>{crypto.currencySymbol}</span>
                              </div>
                              <div><span>/</span></div>
                              <div style={{ color: crypto.averagePrice < crypto.currentPrice ? Color.green : Color.red }}>
                                <span>{crypto.averagePrice}</span>
                                <span>{crypto.currencySymbol}</span>
                              </div>
                            </td>
                            <td className='Total_Spent_And_Current_Investment'>
                              <div>
                                <span>{crypto.totalSpendInUSD}</span>
                                <span>{crypto.currencySymbol}</span>
                              </div>
                              <span>/</span>
                              <div style={{ color: crypto.currentInvestment > crypto.totalSpendInUSD ? Color.green : Color.red }}>
                                <span>{crypto.currentInvestment}</span>
                                <span>{crypto.currencySymbol}</span>
                              </div>
                            </td>
                            <td style={{ color: crypto.currentReturn > 0 ? Color.green : Color.red }}>
                              <span>{crypto.currentReturn}</span>
                              <span>{crypto.currencySymbol}</span>
                            </td>
                            <td style={{ color: crypto.returnPercentage === "Infinity" || crypto.returnPercentage > 0 ? Color.green : Color.red }}>
                              <span>{crypto.returnPercentage}</span>
                              {crypto.returnPercentage !== "Infinity" && <span>%</span>}
                            </td>
                          </tr>
                          {isRowExpanded(index) && (
                            <tr className="Extra_Content">
                              <td className='Total_Spent'>
                                <span>{t('Total spent')}</span>
                                <div>
                                  <span>{crypto.totalSpendInUSD}</span>
                                  <span>{crypto.currencySymbol}</span>
                                </div>
                              </td>
                              <td className='Current_Investment'>
                                <span>{t('Current investment')}</span>
                                <div style={{ color: crypto.currentInvestment > crypto.totalSpendInUSD ? Color.green : Color.red }}>
                                  <span>{crypto.currentInvestment}</span>
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
                            </tr>
                          )}
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