import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";

enum Status {
  Active = 'Active',
  Inactive = 'Inactive',
  Blocked = 'Blocked'
}
@Entity()
@Unique(["email", "userName", "nickName"])
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({type: "varchar"})
  userName: string

  @Column({type: "varchar"})
  nickName: string

  @Column({type: "varchar"})
  firstName: string

  @Column({type: "varchar"})
  lastName: string
  
  @Column({type: "varchar"})
  phoneNumber: string // not sure here
  
  @Column()
  birthday: Date // age > 18
  
  @Column({type: "varchar"})
  country: string
  
  @Column()
  email: string
  
  @Column()
  password: string // should be hashed
  
  @Column({
    type: "enum",
    enum: Status,
    default: Status.Active
  })
  status: Status;
  
  @CreateDateColumn()
  createdAt: Date
  
  @UpdateDateColumn()
  updatedAt: Date

  // PreferableActivityTypeID
}
