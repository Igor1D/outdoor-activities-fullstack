import { IsInt } from 'class-validator';

export class CreatePreferableActivityTypeDto {
  @IsInt()
  userId: number;

  @IsInt()
  activityTypeId: number;
}
