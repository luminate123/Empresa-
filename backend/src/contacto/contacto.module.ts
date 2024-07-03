// Paso 2: Configurar MailerModule en app.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { ContactoService } from './contacto.service';
import { EmailController } from './contacto.controller';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'sandbox.smtp.mailtrap.io',
        port: 2525,
        auth: {
          user: 'e943034f594f06',
          pass: '622d5d5ab552b6',
        },
      },
      defaults: {
        from: '"No Reply" <noreply@example.com>',
      },
    }),
  ],
  controllers: [EmailController],
  providers: [ContactoService],
})
export class ContactoModule {}
