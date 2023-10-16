import { z } from "zod";

export function containsOnlyLetters(str: string): boolean {
  const stringSchema = z
  .string()
  .refine((str) => /^[a-zA-Z\s]+$/.test(str));
    
  return stringSchema.safeParse(str).success;

}