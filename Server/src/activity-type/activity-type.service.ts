import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateActivityTypeDto } from './dto/create-activity-type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityType } from './entities/activity-type.entity';
import { Repository } from 'typeorm';
import { ActivityTypeEnum } from '../enums/activity.enum';

@Injectable()
export class ActivityTypeService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(ActivityType)
    private readonly activityTypeRepo: Repository<ActivityType>,
  ) {}

  async onApplicationBootstrap() {
    await this.seedActivityTypes();
  }

  private async seedActivityTypes() {
    const existing = await this.activityTypeRepo.count();

    if (existing === 0) {
      const types = Object.values(ActivityTypeEnum).map((name) => ({ name }));
      await this.activityTypeRepo.save(types);
      console.log('Activity Types seeded');
    }
  }
}
