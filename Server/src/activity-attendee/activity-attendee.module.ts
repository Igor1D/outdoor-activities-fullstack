import { Module } from '@nestjs/common';
import { ActivityAttendeeService } from './activity-attendee.service';
import { ActivityAttendeeController } from './activity-attendee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivityAttendee } from './entities/activity-attendee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ActivityAttendee])],
  controllers: [ActivityAttendeeController],
  providers: [ActivityAttendeeService],
})
export class ActivityAttendeeModule {}
