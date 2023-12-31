import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import * as dotenv from 'dotenv';
import { Movie } from './movies/entities/movie.entity'; // Movie 엔티티 경로 추가

dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forFeature([Movie]),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [Movie],
      synchronize: true,
    }),
  ],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}
