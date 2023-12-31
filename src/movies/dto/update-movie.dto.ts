import { IsString, IsNumber } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDTO } from './create-movie.dto';

export class UpdateMovieDTO extends PartialType(CreateMovieDTO) {}

//create랑 다른 점은 값이 필수 X
//PartialType 속성들이 선택적(optional)으로 취급
