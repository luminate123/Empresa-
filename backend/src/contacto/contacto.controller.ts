import { Controller, Post, Body } from '@nestjs/common';
import { ContactoService } from './contacto.service';

@Controller('api/email')
export class EmailController {
  constructor(private readonly emailService: ContactoService) {}

  @Post('send')
  async sendEmail(@Body() emailDto: { to: string; subject: string; content: string }): Promise<void> {
    await this.emailService.sendEmail(emailDto.to, emailDto.subject, emailDto.content);
  }
}