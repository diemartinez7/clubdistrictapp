import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import { Club } from "./club.entity";

@Entity()
export class Jugador {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    salary: number;

    @ManyToOne(() => Club, (club) => club.jugadores)
    @JoinColumn({ name: 'club_id' })
    club: Club

    /* relacion con club */
}