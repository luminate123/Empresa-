import { Controller, Get, Param, ParseIntPipe, Post, Body, BadRequestException, Delete, Patch, UseInterceptors, UploadedFile } from '@nestjs/common';
import { PersonasService } from './personas.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { Persona } from './persona.entity';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { extname } from 'path';

@Controller('personas')
export class PersonasController {
    constructor(private personasService: PersonasService) { }

    @Post()
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: './uploads',  // Asegúrate de que esta ruta sea correcta
                filename: (req, file, callback) => {
                    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                    const ext = extname(file.originalname);
                    callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
                },
            }),
        }),
    )
    async createPersona(@Body() newPersona: CreatePersonaDto, @UploadedFile() image: Express.Multer.File): Promise<Persona> {
        try {
            if (image) {
                newPersona.imagen = image.path;  // Asumiendo que tienes un campo `imagePath` en tu DTO y entidad
            }
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
    async getPersona(@Param('id', ParseIntPipe) id: number): Promise<Persona> {
        const persona = await this.personasService.getPersona(id)
        return { ...persona, imagen: `http://localhost:3000/${persona.imagen}` }
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