import { Controller, Get } from '@nestjs/common';
import { PersonasService } from './personas.service';


@Controller('personas')
export class PersonasController {

    constructor(private personasService: PersonasService) { }

    @Get()
    getPersonas() {
        return this.personasService.getPersonas();
    }

}
