
import { IsNotEmpty, IsString } from 'class-validator';

export class CreatePersonaDto {

    @IsNotEmpty()
    cPerApellido: string;
    @IsNotEmpty()
    cPerNombre: string;
    @IsNotEmpty()
    cPerDireccion: string;
    @IsNotEmpty()
    dPerFecNac: Date;
    @IsNotEmpty()
    nPerEdad: number;
    @IsNotEmpty()
    cPerSexo?: string;
    @IsNotEmpty()
    nPerSueldo: number;
    @IsNotEmpty()
    nPerEstado: string;

    @IsNotEmpty()
    imagen:string;
}