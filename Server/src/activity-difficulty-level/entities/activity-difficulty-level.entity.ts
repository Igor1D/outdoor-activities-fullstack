import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DifficultyLevelEnum } from '../../enums/activity.enum';

@Entity()
export class ActivityDifficultyLevel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: DifficultyLevelEnum, unique: true })
  name: DifficultyLevelEnum;
}
