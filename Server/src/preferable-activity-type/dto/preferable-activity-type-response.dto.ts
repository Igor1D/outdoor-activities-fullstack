import { Expose, Type } from 'class-transformer';
import { UserResponseDto } from '../../user/dto/user-response.dto';
import { ActivityTypeResponseDto } from '../../activity-type/dto/activity-type-response.dto';

export class PreferableActivityTypeResponseDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;

  @Expose()
  @Type(() => ActivityTypeResponseDto)
  activityType: ActivityTypeResponseDto;
}
