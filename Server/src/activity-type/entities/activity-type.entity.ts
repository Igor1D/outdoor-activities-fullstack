import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ActivityTypeEnum } from '../../enums/activity.enum';

@Entity()
export class ActivityType {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: ActivityTypeEnum, unique: true })
  name: ActivityTypeEnum;

  //   ActivityDifficultLevelID
}
