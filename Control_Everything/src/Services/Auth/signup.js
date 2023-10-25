// Utili
  import { validateEmail } from "../../utils/email/is.valide.email";
  import { isPasswordStrong } from "../../utils/password/is.password.strong";
// Utili

import axios from 'axios';

export const signup = async (userData) => {

  const { email, password, dateOfBirth, country, confirmPassword, gender, fullName } = userData;

  if (!email || !password || !fullName || !gender || !dateOfBirth || !country || !confirmPassword) {
    console.log("Please fill all the fields")

    return;
  }

  console.log("Passou Erros dos campos vazios");

  if (!validateEmail(email)) {
    console.log("Invalid email format"); 
    return;
  }

  console.log("Passou Erro de email invalido");

  if(password !== confirmPassword) {
    console.log("Passwords do not match");
    return;
  }

  console.log("Passou Erro de senhas diferentes");

  if (!isPasswordStrong(password)) {
    console.log("Password is not strong enough");
    return;
  }

  console.log("Passou Erro de senha fraca");

  try {

    console.log("Entrou no try");

    const response = await axios.post('http://localhost:3000/auth/signup', {
      email,
      password,
      fullName,
      confirmPassword,
      dateOfBirth,
      country,
      gender
    });

    console.log(response.data)
    console.log("Conta Criada com sucesso");

  }catch(error) {
    console.log("Deu erro");
    console.log(error)
  }
}