import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Unique } from 'typeorm';
import { ActivityAttendee } from '../../activity-attendee/entities/activity-attendee.entity';
import { ActivityType } from '../../activity-type/entities/activity-type.entity';
import { ActivityDifficultyLevel } from '../../activity-difficulty-level/entities/activity-difficulty-level.entity';
import { ActivityLocation } from '../../activity-location/entities/activity-location.entity';

enum Status {
  Future = 'Future',
  Ongoing = 'Ongoing',
  Cancelled = 'Cancelled',
  Completed = 'Completed',
}
@Entity()
@Unique(['name'])
export class Activity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  tags: string;

  @ManyToOne(() => ActivityType)
  activityType: ActivityType;

  @ManyToOne(() => ActivityDifficultyLevel)
  difficultLevel: ActivityDifficultyLevel;
  // ActivityLocationID

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column()
  eventDate: Date;

  @Column({ type: 'timestamp' })
  startTime: Date;

  @Column({ type: 'time' })
  endTime: string;

  @Column({ type: 'time' })
  meetUpTime: string;

  @Column()
  meetUpLocation: string;

  @Column({ type: 'enum', enum: Status })
  status: Status;

  @Column({ default: false })
  isPromoted: boolean;

  @OneToMany(() => ActivityAttendee, (attendee) => attendee.activity)
  attendees: ActivityAttendee[];

  @ManyToOne(() => ActivityDifficultyLevel, (level) => level.activities)
  difficultyLevel: ActivityDifficultyLevel;

  @OneToOne(() => ActivityLocation, (location) => location.activity)
  @JoinColumn()
  location: ActivityLocation;
}
