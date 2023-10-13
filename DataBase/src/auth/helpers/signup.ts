import { signup_dto } from "src/user/dto/signup.dto";

export async function Signup (
  dto: signup_dto,
) {
  
  const { email, password, fullName, confirmPassword, dateOfBirth, country, gender } = dto;

  return {message: "User created successfully"} 
}