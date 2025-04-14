import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';
import { ActivityAttendee } from '../../activity-attendee/entities/activity-attendee.entity';
import { PreferableActivityType } from '../../preferable-activity-type/entities/preferable-activity-type.entity';

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Blocked = 'Blocked',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  RatherNotSay = 'RatherNotSay',
}

@Entity()
@Unique(['email', 'userName'])
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'varchar' })
  userName: string;

  @Column({ nullable: true, type: 'varchar' })
  firstName: string;

  @Column({ nullable: true, type: 'varchar' })
  lastName: string;

  @Column({ nullable: true, type: 'varchar' })
  phoneNumber: string; // not sure here

  @Column({ nullable: true })
  birthDay: Date; // age > 18

  @Column({ nullable: true, type: 'varchar' })
  country: string;

  @Column()
  email: string;

  @Column()
  password: string; // should be hashed

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.Active,
    nullable: true,
  })
  status: Status;

  @Column({
    type: 'enum',
    enum: Gender,
    nullable: true,
  })
  gender: Gender;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ActivityAttendee, (attendee) => attendee.user)
  activitiesAttended: ActivityAttendee[];

  @OneToMany(() => PreferableActivityType, (pref) => pref.user)
  preferredActivities: PreferableActivityType[];

  //git test
}
