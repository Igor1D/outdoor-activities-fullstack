import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
  UpdateDateColumn,
} from 'typeorm';

export enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Blocked = 'Blocked',
}

export enum Gender {
  Male = 'Male',
  Female = 'Female',
  RatherNotSay = 'Rather not say',
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

  // PreferableActivityTypeID
  //git test
}
