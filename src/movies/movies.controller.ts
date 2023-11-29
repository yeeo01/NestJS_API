import {
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  Body,
  Query,
  // ParseIntPipe, //URL에서 받은 문자열을 숫자로 변환
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  @Get(':id')
  getOne(@Param('id') movieId: number): Promise<Movie> {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieDate: CreateMovieDTO) {
    return this.moviesService.create(movieDate);
  }

  @Delete(':id')
  remove(@Param('id') movieId: number) {
    return this.moviesService.softDelete(movieId);
  }

  @Patch(':id')
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesService.update(movieId, updateData);
  }
}
