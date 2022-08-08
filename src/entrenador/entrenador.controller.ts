import { Controller, Post } from '@nestjs/common';
import { EntrenadorService } from './entrenador.service';

@Controller('entrenador')
export class EntrenadorController {
    constructor(private entrenadorService: EntrenadorService) {}
    
    @Post()
    createEntrenador(CreateEntrenadorDto) {
        return this.entrenadorService.createEntrenador(CreateEntrenadorDto);
    }

    /* crear entrenador sin club */
    
}