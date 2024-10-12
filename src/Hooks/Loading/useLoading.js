import { useState, useEffect } from 'react';

const useLoading = (initialLoadingState = true, delay = 1500) => {
  const [isLoading, setIsLoading] = useState(initialLoadingState);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return { isLoading, setIsLoading };
};

export default useLoading;