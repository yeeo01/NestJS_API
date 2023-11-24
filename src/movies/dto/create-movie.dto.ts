//쿼리 유효성

import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateMovieDTO {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsOptional() //속성이 선택적임
  @IsString({ each: true })
  readonly genres: string[];
}
