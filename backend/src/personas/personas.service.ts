import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonasService {

    constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) {}

    getPersonas(){
        return  this.personaRepository.find();
    }

}
