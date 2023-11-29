import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  year: number;

  @Column('simple-array')
  genres: string[];

  @DeleteDateColumn() // Soft delete
  deletedAt: Date;
}
