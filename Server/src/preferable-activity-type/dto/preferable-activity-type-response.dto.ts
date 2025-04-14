import { Expose, Type } from 'class-transformer';

export class PreferableActivityTypeResponseDto {
  @Expose()
  id: number;

  @Expose()
  @Type(() => UserResponseDto)
  user: UserResponseDto;

  @Expose()
  activityTypeId: number;
}
