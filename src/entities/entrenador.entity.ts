import { Column, Entity, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Club } from "./club.entity";

@Entity()
export class Entrenador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    salary: number;

    @OneToOne(() => Club, (club) => club.id)
    club: Club;
    
    /* relacion con club */
}