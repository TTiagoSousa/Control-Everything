import { useState, useEffect } from 'react';

const useLoading = () => {
  const [isLoading, setIsLoadingState] = useState(true);

  // Função auxiliar para controlar o atraso
  const setIsLoading = (loading) => {
    if (!loading) {
      // Se definirmos isLoading como false, aguarda 2 segundos
      setTimeout(() => {
        setIsLoadingState(false);
      }, 1000);
    } else {
      // Se definirmos isLoading como true, atualiza imediatamente
      setIsLoadingState(true);
    }
  };

  return { isLoading, setIsLoading };
};

export default useLoading;