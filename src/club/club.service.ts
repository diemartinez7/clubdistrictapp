import { Injectable } from '@nestjs/common';
import { CreateClubDto } from 'src/dto/club.dto';
import { CreateEntrenadorDto } from 'src/dto/entrenador.dto';
import { CreateJugadorDto } from 'src/dto/jugador.dto';
import { Club } from 'src/entities/club.entity';
import { Entrenador } from 'src/entities/entrenador.entity';
import { Jugador } from 'src/entities/jugador.entity';



@Injectable()
export class ClubService {
    clubRepository: any;
    createClub(createClubDto: CreateClubDto) {
        const club = new Club()
        club.id = createClubDto.id
        club.name = createClubDto.name
        club.budget = createClubDto.budget


        return this.clubRepository.save(club)
    }

    createJugador(createJugadorDto: CreateJugadorDto) {
        const jugador = new Jugador()
        jugador.id = createJugadorDto.id
        jugador.name = createJugadorDto.name
        jugador.salary = createJugadorDto.salary

        return this.clubRepository.save(jugador)
    }
    /* + falta restar el salario del presupuesto del club */
    
    createEntrenador(createEntrenadorDto: CreateEntrenadorDto) {
        const entrenador = new Entrenador()
        entrenador.id = createEntrenadorDto.id
        entrenador.name = createEntrenadorDto.name
        entrenador.salary = createEntrenadorDto.salary

        return this.clubRepository.save(entrenador)
    }
    /* + falta restar el salario del presupuesto del club */

    deleteJugador(createJugadorDto: CreateJugadorDto) {
        return this.clubRepository.delete(createJugadorDto);
    }

    deleteEntrenador(createEntrenadorDto: CreateEntrenadorDto) {
        return this.clubRepository.delete(createEntrenadorDto);
    }

    findAll() {
        return this.clubRepository.findAll({
            relations: ['jugador']
        });
    }


    /* + falta el put para modificar presupuesto del club */
}