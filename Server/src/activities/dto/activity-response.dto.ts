import { Expose } from 'class-transformer';
import { ActivityTypeResponseDto } from '../../activity-type/dto/activity-type-response.dto';
import { DifficultyLevelResponseDto } from '../../activity-difficulty-level/dto/difficulty-level-response.dto';

export class ActivityResponseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;

  @Expose()
  description: string;

  @Expose()
  startTime: Date;

  @Expose()
  address: string;

  @Expose()
  coordinates: string;

  @Expose()
  activityType: ActivityTypeResponseDto;

  @Expose()
  difficultyLevel: DifficultyLevelResponseDto;
}
