import { Controller, Body, Patch, Param } from '@nestjs/common';
import { ActivityAttendeeService } from './activity-attendee.service';
import { ActivityAttendee } from './entities/activity-attendee.entity';
import { UpdateActivityAttendeeDto } from './dto/update-activity-attendee.dto';

@Controller('activity-attendee')
export class ActivityAttendeeController {
  constructor(
    private readonly activityAttendeeService: ActivityAttendeeService,
  ) {}

  @Patch(':attendanceId')
  async updateStatus(
    @Param('attendanceId') attendanceId: number,
    @Body() updateActivityAttendeeDto: UpdateActivityAttendeeDto,
  ): Promise<ActivityAttendee> {
    return this.activityAttendeeService.updateStatus(
      attendanceId,
      updateActivityAttendeeDto.status,
    );
  }
}
