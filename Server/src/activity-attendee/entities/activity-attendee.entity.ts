import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';
import { Activity } from '../../activities/entities/activity.entity';

export enum Status {
  Pending = 'Pending',
  Confirmed = 'Confirmed',
  Rejected = 'Rejected',
}

@Entity()
export class ActivityAttendee {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.activitiesAttended)
  user: User;

  @ManyToOne(() => Activity, (activity) => activity.attendees)
  activity: Activity;

  @Column({ type: 'enum', enum: Status })
  status: Status;
}
