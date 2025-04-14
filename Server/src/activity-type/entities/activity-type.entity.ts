import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ActivityTypeEnum } from '../../enums/activity.enum';
import { Expose } from 'class-transformer';
import { PreferableActivityType } from '../../preferable-activity-type/entities/preferable-activity-type.entity';

@Entity()
export class ActivityType {
  @PrimaryGeneratedColumn()
  @Expose()
  id: number;

  @Column({ type: 'enum', enum: ActivityTypeEnum })
  @Expose()
  name: ActivityTypeEnum;

  @OneToMany(() => PreferableActivityType, (pref) => pref.activityType)
  preferredByUsers: PreferableActivityType[];
}
