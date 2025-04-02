import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateActivityAttendeeDto } from './dto/create-activity-attendee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityAttendee, Status } from './entities/activity-attendee.entity';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { Activity } from '../activities/entities/activity.entity';

@Injectable()
export class ActivityAttendeeService {
  constructor(
    @InjectRepository(ActivityAttendee)
    private readonly attendeeRepository: Repository<ActivityAttendee>,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    @InjectRepository(Activity)
    private readonly activityRepository: Repository<Activity>,
  ) {}

  // Fetch user entities
  async create(createActivityAttendeeDto: CreateActivityAttendeeDto) {
    const user = await this.userRepository.findOneBy({
      id: createActivityAttendeeDto.userId,
    });
    // Fetch Activity entity
    const activity = await this.activityRepository.findOneBy({
      id: createActivityAttendeeDto.activityId,
    });

    // Existence validation
    if (!user || !activity) {
      throw new NotFoundException('User or Activity not found');
    }

    //   Create attendance record with entities (refers to a single ActivityAttendee record being created)
    const attendance = this.attendeeRepository.create({
      user,
      activity,
      status: Status.Pending,
    });

    return this.attendeeRepository.save(attendance);
  }

  async updateStatus(
    attendanceId: number,
    newStatus: Status,
  ): Promise<ActivityAttendee> {
    // Fetching attendance record
    const attendance = await this.attendeeRepository.findOneBy({
      id: attendanceId,
    });
    // Checking if the record exsits
    if (!attendance) {
      throw new NotFoundException('Attendance record not found');
    }

    // Validate status transition
    if (
      attendance.status === Status.Rejected &&
      newStatus === Status.Confirmed
    ) {
      throw new BadRequestException('Cannot confirm a rejected attendance');
    }

    // Updating and saving
    attendance.status = newStatus;
    return this.attendeeRepository.save(attendance);
  }
}
