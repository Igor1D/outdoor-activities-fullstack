import { IsEnum } from 'class-validator';
import { Status } from '../entities/activity-attendee.entity';

export class UpdateActivityAttendeeDto {
  @IsEnum(Status)
  status: Status;
}
