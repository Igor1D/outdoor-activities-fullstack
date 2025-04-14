import { IsEnum, IsNotEmpty } from 'class-validator';
import { ActivityTypeEnum } from '../../enums/activity.enum';

export class CreateActivityTypeDto {
  @IsEnum(ActivityTypeEnum, {
    message: `Invalid activity type. Valid options: ${Object.values(ActivityTypeEnum).join(',')}`,
  })
  @IsNotEmpty()
  name: ActivityTypeEnum;
}
