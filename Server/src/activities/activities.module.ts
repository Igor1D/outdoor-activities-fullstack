import { forwardRef, Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Activity } from './entities/activity.entity';
import { UserModule } from '../user/user.module';
import { ActivityTypeModule } from '../activity-type/activity-type.module';
import { ActivityLocationModule } from '../activity-location/activity-location.module';
import { ActivityDifficultyLevelModule } from '../activity-difficulty-level/activity-difficulty-level.module';
import { ActivityRelationsService } from './services/activity-relations.service';

@Module({
  imports: [
    ActivityLocationModule,
    TypeOrmModule.forFeature([Activity]),
    UserModule,
    ActivityTypeModule,
    ActivityDifficultyLevelModule,
  ],
  exports: [
    TypeOrmModule.forFeature([Activity]),
    ActivitiesService,
    ActivityRelationsService,
  ],
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
})
export class ActivitiesModule {}
