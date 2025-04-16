import { forwardRef, Module } from '@nestjs/common';
import { ActivityLocationService } from './activity-location.service';
import { ActivityLocationController } from './activity-location.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityLocation } from './entities/activity-location.entity';
import { Activity } from '../activities/entities/activity.entity';
import { ActivitiesModule } from '../activities/activities.module';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityLocation])],
  controllers: [ActivityLocationController],
  providers: [ActivityLocationService],
  exports: [ActivityLocationService],
})
export class ActivityLocationModule {}
