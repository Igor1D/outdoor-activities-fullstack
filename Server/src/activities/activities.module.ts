import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { UserModule } from '../user/user.module';
import { ActivityTypeModule } from '../activity-type/activity-type.module';
import { ActivityDifficultyLevel } from '../activity-difficulty-level/entities/activity-difficulty-level.entity';
import { ActivityDifficultyLevelModule } from '../activity-difficulty-level/activity-difficulty-level.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Activity]),
    UserModule,
    ActivityTypeModule,
    ActivityDifficultyLevelModule,
  ],
  exports: [TypeOrmModule.forFeature([Activity])],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
