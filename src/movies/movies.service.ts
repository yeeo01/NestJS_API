import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; //TypeORM의 Repository를 주입하기 위해 사용
import { Repository } from 'typeorm'; //TypeORM에서 데이터베이스 작업을 수행하기 위한 기능 제공
import { Movie } from './entities/movie.entity';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>,
  ) {}

  // 모든 영화를 가져오는 쿼리 실행
  async getAll(): Promise<Movie[]> {
    return await this.movieRepository.find();
  }

  // 요청 ID 유효성 검사
  async getOne(id: number): Promise<Movie> {
    const movie = await this.movieRepository.findOne({ where: { id } });
    if (!movie) {
      throw new NotFoundException('Movie with Id Not found');
    }
    return movie;
  }

  // 삭제
  async deleteOne(id: number): Promise<void> {
    const movie = await this.getOne(id);
    await this.movieRepository.delete(movie.id); // 해당 영화 삭제
  }

  // 생성
  async create(movieDate: CreateMovieDTO): Promise<Movie> {
    const newMovie = this.movieRepository.create(movieDate);
    return await this.movieRepository.save(newMovie);
  }

  // 수정
  async update(id: number, updateData: UpdateMovieDTO): Promise<Movie> {
    const movie = await this.getOne(id);
    Object.assign(movie, updateData);
    return await this.movieRepository.save(movie);
  }
}
