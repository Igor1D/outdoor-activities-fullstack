import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityDifficultyLevelDto } from './create-activity-difficulty-level.dto';

export class UpdateActivityDifficultyLevelDto extends PartialType(CreateActivityDifficultyLevelDto) {}
