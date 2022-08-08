import { Injectable } from '@nestjs/common';
import { CreateEntrenadorDto } from 'src/dto/entrenador.dto';
import { Entrenador } from 'src/entities/entrenador.entity';

@Injectable()
export class EntrenadorService {
        entrenadorRepository: any;
    createEntrenador(createEntrenadorDto: CreateEntrenadorDto) {
        const entrenador = new Entrenador()
        entrenador.id = createEntrenadorDto.id
        entrenador.name = createEntrenadorDto.name

        return this.entrenadorRepository.save(entrenador)
    }
}
