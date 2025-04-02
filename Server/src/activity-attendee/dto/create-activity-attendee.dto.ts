import { IsInt } from 'class-validator';

export class CreateActivityAttendeeDto {
  @IsInt()
  userId: number;

  @IsInt()
  activityId: number;
}
