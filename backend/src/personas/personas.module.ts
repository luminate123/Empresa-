import { Module } from '@nestjs/common';
import { PersonasController } from './personas.controller';
import { PersonasService } from './personas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Persona } from './persona.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Persona]),
  ],
  controllers: [PersonasController],
  providers: [PersonasService]
})
export class PersonasModule {}
