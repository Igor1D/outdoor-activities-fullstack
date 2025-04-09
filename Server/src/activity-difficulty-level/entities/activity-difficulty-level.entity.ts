import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DifficultyLevelEnum } from '../../enums/activity.enum';
import { Expose } from 'class-transformer';

@Entity()
export class ActivityDifficultyLevel {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ type: 'enum', enum: DifficultyLevelEnum, unique: true })
  @Expose()
  name: DifficultyLevelEnum;
}
