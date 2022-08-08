import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Entrenador } from "./entrenador.entity";
import { Jugador } from "./jugador.entity";

@Entity()
export class Club {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    budget: number;

    /* + faltaria establecer que el presupuesto no debe ser menor a 0 */

    @OneToOne(() => Entrenador)
    @JoinColumn({ name: 'entrenador.id' })
    entrenador: Entrenador;

    @OneToMany(() => Jugador, (jugador) => jugador.club)
    jugadores: Jugador[];

    /* relaciones con otras entidades */
}
