import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Activity } from '../../activities/entities/activity.entity';

@Entity()
export class ActivityLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Activity, (activity) => activity.location)
  activity: Activity;

  @Column()
  address: string;

  @Column({ nullable: true })
  coordinates: string;
}
