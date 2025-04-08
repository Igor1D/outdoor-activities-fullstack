import { Module } from '@nestjs/common';
import { ActivityDifficultyLevelService } from './activity-difficulty-level.service';
import { ActivityDifficultyLevelController } from './activity-difficulty-level.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityDifficultyLevel } from './entities/activity-difficulty-level.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityDifficultyLevel])],
  controllers: [ActivityDifficultyLevelController],
  providers: [ActivityDifficultyLevelService],
  exports: [TypeOrmModule.forFeature([ActivityDifficultyLevel])],
})
export class ActivityDifficultyLevelModule {}
