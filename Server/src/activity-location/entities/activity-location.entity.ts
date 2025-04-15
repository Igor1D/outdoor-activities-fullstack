import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Activity } from '../../activities/entities/activity.entity';

@Entity()
export class ActivityLocation {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToMany(() => Activity, (activity) => activity.location)
  @JoinColumn({ name: 'activityId' })
  activity: Activity;

  @Column()
  address: string;

  @Column({ type: 'geometry', spatialFeatureType: 'Point', srid: 4326 })
  coordinates: string;
}
