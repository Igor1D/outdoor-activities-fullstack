import { Entity, ManyToOne, PrimaryGeneratedColumn, Unique } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { ActivityType } from '../../activity-type/entities/activity-type.entity';
import { Expose } from 'class-transformer';

@Entity()
export class PreferableActivityType {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.preferredActivities)
  user: User;

  @ManyToOne(() => ActivityType, (type) => type.preferredByUsers)
  activityType: ActivityType;
}
