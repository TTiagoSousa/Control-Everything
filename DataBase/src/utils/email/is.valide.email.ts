import { z } from 'zod';

export function isValidEmail(email: string): boolean {
  const EmailSchemaZod = z
    .string().email()
    .refine((str) => /^[a-zA-Z\s]+$/.test(str));

  return EmailSchemaZod.safeParse(email).success;
}