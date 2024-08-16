import { useState } from "react";
import { NavsState } from "../../Contexts/Navs_Context";
import http from "../../Services/httpService";
import { useTranslation } from 'react-i18next';
import { containsOnlyLettersNumbersAndHyphens } from "../../Utils/text/contains.only.letters.numbers.and.hyphens";
import { DataBaseState } from "../../Contexts/DataBase_Context";

const useUpdateSavingTransition = (selectedTransition) => {

  const { t } = useTranslation();

  const { setAlert } = NavsState();

  const { authenticated, userId } = DataBaseState();

  const [ date, setDate ] = useState('');
  const [ amount, setAmount ] = useState('');
  const [ platformID, setPlatformID ] = useState('');
  const [ currencyTypeID, setCurrencyTypeID ] = useState('');
  const [ description, setDescription ] = useState('');
  const [ transitionType, setTransitionType ] = useState('DEPOSIT');
  const [ feesPaid, setFeesPaid ] = useState('')

  const updateSavingTransition = async () => {

    if (!date || !amount || !platformID || !transitionType || !date) {
      setAlert({
        open: true,
        message: t("All fields must be filled in"),
        type: 'error'
      });

      return;
    }

    if (!containsOnlyLettersNumbersAndHyphens(platformID)) {
      setAlert({
        open: true,
        message: t("Invalid platform"),
        type: 'error'
      });
      return;
    }

    if (!containsOnlyLettersNumbersAndHyphens(currencyTypeID)) {
      setAlert({
        open: true,
        message: t("Invalid currency"),
        type: 'error'
      });
      return;
    }

    const formattedDate = new Date(date).toISOString();

    try{

      const data = {
        date: formattedDate,
        amount: parseInt(amount, 10), // Assuming amount should be a number
        platformID,
        currencyTypeID,
        description,
        transitionType,
        feesPaid: parseFloat(feesPaid), // Assuming feesPaid should be a number
      };

      const response = await http.patch(`saving-transitions/${userId}/update-savings-transition/${selectedTransition.id}`, data);

      setAlert({
        open: true,
        message: t('Transition updated successfully'),
        type: 'success',
      });

      setTimeout(() => {
        window.location.reload();
      }, 2000);

    }catch (error) {
      console.log(error)
      if (error.response && error.response.status === 502) {
        let errorMessage = error.response.data.message;
        errorMessage = t(errorMessage);
        setAlert({
          open: true,
          message: errorMessage,
          type: 'error'
        });
      }
    }
  }

  return {
    updateSavingTransition,    
    date, setDate,
    amount, setAmount,
    platformID, setPlatformID,
    currencyTypeID, setCurrencyTypeID,
    transitionType, setTransitionType,
    description, setDescription,
    feesPaid, setFeesPaid
  }
}

export default useUpdateSavingTransition;