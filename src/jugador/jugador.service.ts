import { Injectable } from '@nestjs/common';
import { CreateJugadorDto } from 'src/dto/jugador.dto';
import { Jugador } from 'src/entities/jugador.entity';

@Injectable()
export class JugadorService {
    jugadorRepository: any;
    createJugador(createJugadorDto: CreateJugadorDto) {
        const jugador = new Jugador()
        jugador.id = createJugadorDto.id
        jugador.name = createJugadorDto.name

        return this.jugadorRepository.save(jugador)
    }
}
