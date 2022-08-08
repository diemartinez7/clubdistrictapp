import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClubController } from './club/club.controller';
import { ClubService } from './club/club.service';
import { JugadorController } from './jugador/jugador.controller';
import { JugadorService } from './jugador/jugador.service';
import { EntrenadorController } from './entrenador/entrenador.controller';
import { EntrenadorService } from './entrenador/entrenador.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'app',
      database: 'gestionclub_db',
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ClubController, JugadorController, EntrenadorController],
  providers: [AppService, ClubService, JugadorService, EntrenadorService],
})
export class AppModule { }
