import { Module } from '@nestjs/common';
import { ActivityAttendeeService } from './activity-attendee.service';
import { ActivityAttendeeController } from './activity-attendee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityAttendee } from './entities/activity-attendee.entity';
import { UserModule } from '../user/user.module';
import { ActivitiesModule } from '../activities/activities.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActivityAttendee]),
    UserModule,
    ActivitiesModule,
  ],
  controllers: [ActivityAttendeeController],
  providers: [ActivityAttendeeService],
})
export class ActivityAttendeeModule {}
