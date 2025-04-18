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
    await this.activityRepo.update(activityId, {
      location: { id: locationId } as ActivityLocation,
    });
    return this.activityRepo.findOne({
      where: { id: activityId },
      relations: ['location'],
    });
  }
}
