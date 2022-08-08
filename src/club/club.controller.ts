import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ClubService } from './club.service';

@Controller()
export class ClubController {
    constructor(private clubService: ClubService) { }

    @Post()
    createClub(CreateClubDto) {
        return this.clubService.createClub(CreateClubDto);
    }
    /* crear club */

    @Post()
    createJugador(CreateJugadorDto) {
        return this.clubService.createJugador(CreateJugadorDto);
    }
    /* crear jugador */

    @Post()
    createEntrenador(CreateEntrenadorDto) {
        return this.clubService.createEntrenador(CreateEntrenadorDto);
    }
    /* crear entrenador */

    @Delete('jugador')
    deleteJugador(@Param('idJugador') idJugador: number): any {
        return { idJugador: idJugador, delete: true }
    }
    /* eliminar jugador */

    @Delete('entrenador')
    deleteEntrenador(@Param('idEntrenador') idEntrenador: number): any {
        return { idEntrenador: idEntrenador, delete: true }
    }
    /* eliminar entrenador */

    @Get()
    findAll() {
        return this.clubService.findAll()
    }
    /* listar jugadores */

}
