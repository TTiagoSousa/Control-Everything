// React e css
  import React, { useState, useEffect } from 'react';
  import { Route, useNavigate } from 'react-router-dom';
  import { DataBaseState } from '../Contexts/DataBase_Context';
// Contexts

const Authentication_Check = ({ children }) => {
  const { authenticated } = DataBaseState();
  const [isLoading, setIsLoading] = useState(true); 
  const navigate = useNavigate();

  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => clearTimeout(delay); 
  }, []); // Adicione authenticated como uma dependência

  if (isLoading) {
    return <>Loading</>;
  }

  console.log("authenticated:", authenticated);

  return authenticated ? (
    children
  ) : (
    navigate('/Login')
  );
};

export default Authentication_Check;

