import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Activity } from '../entities/activity.entity';
import { Repository } from 'typeorm';
import { ActivityLocation } from '../../activity-location/entities/activity-location.entity';
import { ActivitiesModule } from '../activities.module';

@Injectable()
export class ActivityRelationsService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepo: Repository<Activity>,
    @InjectRepository(ActivityLocation)
    private readonly locationRepo: Repository<ActivityLocation>,
  ) {}

  async linkLocation(
    activityId: number,
    locationId: number,
  ): Promise<Activity> {
    const activity = await this.activityRepo.findOne({
      where: { id: activityId },
    });
    const location = await this.locationRepo.findOne({
      where: { id: locationId },
    });
    activity.location = location;
    return this.activityRepo.save(activity);
  }
}
