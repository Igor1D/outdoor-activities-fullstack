import {
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
} from '@nestjs/common';
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

  async create(createDto: CreateActivityTypeDto): Promise<ActivityType> {
    const newType = this.activityTypeRepo.create(createDto);
    return this.activityTypeRepo.save(newType);
  }

  async findAll(): Promise<ActivityType[]> {
    return this.activityTypeRepo.find({ order: { id: 'ASC' } });
  }

  async findOne(id: number): Promise<ActivityType> {
    const type = await this.activityTypeRepo.findOne({ where: { id } });
    if (!type) throw new NotFoundException(`Activity type ${id} not found`);
    return type;
  }

  async update(
    id: number,
    updateDto: UpdateActivityTypeDto,
  ): Promise<ActivityType> {
    await this.activityTypeRepo.update(id, updateDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    const result = await this.activityTypeRepo.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Activity type ${id} no found`);
    }
  }
}
