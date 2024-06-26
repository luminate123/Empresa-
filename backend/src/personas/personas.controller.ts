import { Controller, Get, Param, ParseIntPipe, Post, Body, BadRequestException, Delete, Patch } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './persona.entity';

@Controller('personas')
export class PersonasController {
    constructor(private personasService: PersonasService) { }

    @Post()
    async createPersona(@Body() newPersona: CreatePersonaDto): Promise<Persona> {
        try {
            return await this.personasService.createPersona(newPersona);
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }

    @Get()
    async getPersonas(): Promise<Persona[]> {
        return await this.personasService.getPersonas();
    }

    @Get(':id')
    getPersona(@Param('id', ParseIntPipe) id: number): Promise<Persona> {
        return this.personasService.getPersona(id)
    }

    @Delete(':id')
    deletePersona(@Param('id', ParseIntPipe) id: number) {
        return this.personasService.deletePersona(id)
    }
    @Patch(':id')
    updatePersona(@Param('id', ParseIntPipe) id: number, @Body() service: UpdatePersonaDto) {
        return this.personasService.updatePersona(id, service)
    }
}