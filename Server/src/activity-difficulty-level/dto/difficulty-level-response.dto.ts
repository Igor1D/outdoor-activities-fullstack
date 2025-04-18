import { Expose } from 'class-transformer';
import { ActivityDifficultyLevel } from '../entities/activity-difficulty-level.entity';

export class DifficultyLevelResponseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
