import { Injectable } from '@nestjs/common';
import { Activity } from './entities/activity.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { ActivityLocationService } from '../activity-location/activity-location.service';
import { ActivityTypeService } from '../activity-type/activity-type.service';
import { ActivityDifficultLevelService } from '../activity-difficulty-level/activity-difficulty-level.service';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectRepository(Activity)
    private readonly activityRepo: Repository<Activity>,
    private readonly activityTypeService: ActivityTypeService,
    private readonly difficultyLevelService: ActivityDifficultLevelService,
    private readonly locationService: ActivityLocationService,
  ) {}

  async findOne(id: number): Promise<Activity> {
    return this.activityRepo.findOne({
      where: { id },
      relations: ['location', 'activityType', 'difficultyLevel'],
    });
  }

  async create(createDto: CreateActivityDto): Promise<Activity> {
    // Resolve relationships
    const activityType = await this.activityTypeService.findOne(
      createDto.activityTypeId,
    );
    const difficultyLevel = await this.difficultyLevelService.findOne(
      createDto.difficultyLevelId,
    );
    const location = await this.locationService.findOne(createDto.locationId);

    // Create entity with proper typing
    const activity = this.activityRepo.create({
      ...createDto,
      activityType,
      difficultyLevel,
      location,
    });

    return this.activityRepo.save(activity);
  }

  async update(id: number, updateDto: UpdateActivityDto): Promise<Activity> {
    const updateData: Partial<Activity> = { ...updateDto };

    // Handle relationship updates
    if (updateDto.activityTypeId) {
      updateData.activityType = await this.activityTypeService.findOne(
        updateDto.activityTypeId,
      );
    }
    if (updateDto.difficultyLevelId) {
      updateData.difficultyLevel = await this.difficultyLevelService.findOne(
        updateDto.difficultyLevelId,
      );
    }
    if (updateDto.locationId) {
      updateData.location = await this.locationService.findOne(
        updateDto.locationId,
      );
    }

    await this.activityRepo.update(id, updateData);
    return this.findOne(id);
  }

  // async create(createDto: CreateActivityDto): Promise<Activity> {
  //   const activity = this.activityRepo.create(createDto);
  //   return this.activityRepo.save(activity);
  // }
  //
  // async update(id: number, updateDto: UpdateActivityDto): Promise<Activity> {
  //   await this.activityRepo.update(id, updateDto);
  //   return this.activityRepo.findOne({ where: { id } });
  // }
}
