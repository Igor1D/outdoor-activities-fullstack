import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Unique } from "typeorm";

enum Status {
  Future = 'Future',
  Ongoing = 'Ongoing',
  Cancelled = 'Cancelled',
  Completed = 'Completed'
  
}
@Entity()
@Unique(["name"])
export class Activity {
  @PrimaryGeneratedColumn()
  id: number
  
  @Column({type: "varchar"})
  name: string
  
  @Column({type: "text"})
  description: string
  
  @Column({type: "varchar"})
  tags: string

  // ActivityTypeID
  // ActivityLocationID

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date
 
  @Column()
  eventDate: Date
  
  @Column({ type: "time"})
  startTime: string

  @Column({ type: "time"})
  endTime: string

  @Column({ type: "time"})
  meetUpTime: string

  @Column()
  meetUpLocation: string
  
  @Column({type: "enum", enum: Status})
  status: Status
  
  @Column({default: false})
  isPromoted: boolean
  
  
  
  
}
