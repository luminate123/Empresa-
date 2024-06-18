import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';
import { CreatePersonaDto } from './dto/create-persona.dto';

@Injectable()
export class PersonasService {

    constructor(@InjectRepository(Persona) private personaRepository: Repository<Persona>) { }

    createPersona(persona: CreatePersonaDto): Promise<Persona> {
        if (!persona.cPerApellido || !persona.cPerNombre || !persona.cPerDireccion || !persona.dPerFecNac ||!persona.nPerEdad || !persona.nPerSueldo || !persona.nPerEstado) {
            throw new Error('Completa los datos');
        }
        const newPersona = this.personaRepository.create(persona);
        return this.personaRepository.save(newPersona);
    }

    getPersonas() {
        return this.personaRepository.find();
    }

}
