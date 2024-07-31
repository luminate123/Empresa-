import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'personas' })
export class Persona {

    @PrimaryGeneratedColumn()
    nPerCodigo: number;

    @Column({ type: 'char', length: 50, nullable: true })
    cPerApellido: string;

    @Column({ type: 'char', length: 50, nullable: true })
    cPerNombre: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    cPerDireccion: string;

    @Column({ type: 'date', nullable: true })
    dPerFecNac: Date;

    @Column({ type: 'int', width: 11, nullable: true })
    nPerEdad: number;

    @Column({ type: 'char', length: 15, nullable: true, default: 'Masculino' })
    cPerSexo: string;

    @Column({ type: 'decimal', precision: 6, scale: 2, nullable: true })
    nPerSueldo: number;

    @Column({ type: 'varchar', length: 50, nullable: true })
    cPerRnd: string;

    @Column({ type: 'char', length: 1, nullable: false, default: '1' })
    nPerEstado: string;

    @Column({ type: 'varchar', length: 100, nullable: true })
    remember_token: string;

    @Column({ nullable: true })
    imagen: string | null;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
    created_at: Date;

    @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: Date;
}
