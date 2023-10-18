import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter: { sendMail: (arg0: { from: string; to: string; subject: string; html: string; }) => any; };
  constructor() {
    this.transporter = nodemailer.createTransport({
      // Configuração do serviço de e-mail aqui (por exemplo, Gmail)
      service: process.env.EMAIL_SERVICE,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }
}
