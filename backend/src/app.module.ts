import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonasModule } from './personas/personas.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: '',
        database: 'empresa',
        entities: [__dirname + '/**/*.entity{.ts,.js}'],  // Importante
        synchronize: true,
        
      }
    ),
    PersonasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
