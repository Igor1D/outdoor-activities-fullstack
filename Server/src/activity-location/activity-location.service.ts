import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateActivityLocationDto } from './dto/create-activity-location.dto';
import { UpdateActivityLocationDto } from './dto/update-activity-location.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityLocation } from './entities/activity-location.entity';
import { Repository } from 'typeorm';
import { ActivitiesService } from '../activities/activities.service';
import { Activity } from '../activities/entities/activity.entity';

@Injectable()
export class ActivityLocationService {
  constructor(
    @InjectRepository(ActivityLocation)
    private readonly locationRepo: Repository<ActivityLocation>,
    @InjectRepository(Activity)
    private readonly activityService: Repository<Activity>,
  ) {}
  async create(
    createDto: CreateActivityLocationDto,
  ): Promise<ActivityLocation> {
    return this.locationRepo.save(this.locationRepo.create(createDto));
  }

  async findOne(id: number): Promise<ActivityLocation> {
    const location = await this.locationRepo.findOne({
      where: { id },
      relations: ['activity'],
    });

    if (!location) {
      throw new NotFoundException(`Location with ID ${id} not found`);
    }

    return location;
  }

  async update(
    id: number,
    updateDto: UpdateActivityLocationDto,
  ): Promise<ActivityLocation> {
    const location = await this.locationRepo.findOne({
      where: { id },
      relations: ['activity'],
    });

    if (!location) throw new NotFoundException();

    if (updateDto.activityId) {
      location.activity = await this.activityService.findOne({
        where: { id: updateDto.activityId },
      });
    }

    return this.locationRepo.save({
      ...location,
      ...updateDto,
    });
  }

  async findByActivity(activityId: number): Promise<ActivityLocation> {
    return this.locationRepo.findOne({
      where: { activity: { id: activityId } },
      relations: ['activity'], // Load activity relation
    });
  }
}
