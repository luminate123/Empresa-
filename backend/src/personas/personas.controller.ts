import { Controller, Get, Post, Body, BadRequestException } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { Persona } from './persona.entity';

@Controller('personas')
export class PersonasController {
    constructor(private personasService: PersonasService) {}

    @Post()
    async createPersona(@Body() newPersona: CreatePersonaDto): Promise<Persona> {
        try{
            return await this.personasService.createPersona(newPersona);
        } catch (error) {
            throw new BadRequestException(error.message)
        }   
    }

    @Get()
    async getPersonas(): Promise<Persona[]> {
        return await this.personasService.getPersonas();
    }
}