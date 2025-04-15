import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DifficultyLevelEnum } from '../../enums/activity.enum';
import { Expose } from 'class-transformer';
import { Activity } from '../../activities/entities/activity.entity';

@Entity()
export class ActivityDifficultyLevel {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ type: 'enum', enum: DifficultyLevelEnum, unique: true })
  @Expose()
  name: DifficultyLevelEnum;

  @OneToMany(() => Activity, (activity) => activity.difficultLevel)
  activities: Activity[];
}
