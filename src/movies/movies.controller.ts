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
  async getAll(): Promise<Movie[]> {
    return this.moviesService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') movieId: number): Promise<Movie> {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  async create(@Body() movieDate: CreateMovieDTO) {
    return await this.moviesService.create(movieDate);
  }

  @Delete(':id')
  async remove(@Param('id') movieId: number) {
    return await this.moviesService.deleteOne(movieId);
  }

  @Patch(':id')
  async patch(
    @Param('id') movieId: number,
    @Body() updateData: UpdateMovieDTO,
  ) {
    return await this.moviesService.update(movieId, updateData);
  }
}
