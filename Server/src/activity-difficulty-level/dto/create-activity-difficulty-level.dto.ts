import { IsEnum } from 'class-validator';
import { DifficultyLevelEnum } from '../../enums/activity.enum';

export class CreateActivityDifficultyLevelDto {
  @IsEnum(DifficultyLevelEnum)
  name: DifficultyLevelEnum;
}
