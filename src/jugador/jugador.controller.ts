import { Controller, Post } from '@nestjs/common';
import { JugadorService } from './jugador.service';

@Controller('jugador')
export class JugadorController {
    constructor(private jugadorService: JugadorService) { }

    @Post()
    createJugador(CreateJugadorDto) {
        return this.jugadorService.createJugador(CreateJugadorDto);
    }

    /* crear jugador sin club */
}
