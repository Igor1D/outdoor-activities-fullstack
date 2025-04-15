import { Module } from '@nestjs/common';

import { ActivityDifficultyLevelController } from './activity-difficulty-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityDifficultyLevel } from './entities/activity-difficulty-level.entity';
import { ActivityDifficultLevelService } from './activity-difficulty-level.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityDifficultyLevel])],
  controllers: [ActivityDifficultyLevelController],
  providers: [ActivityDifficultLevelService],
  exports: [TypeOrmModule.forFeature([ActivityDifficultyLevel]), TypeOrmModule],
})
export class ActivityDifficultyLevelModule {}
