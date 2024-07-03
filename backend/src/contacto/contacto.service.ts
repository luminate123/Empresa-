import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class ContactoService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(to: string, subject: string, content: string): Promise<void> {
    await this.mailerService.sendMail({
      to,
      subject,
      text: content,
    });
  }
}
