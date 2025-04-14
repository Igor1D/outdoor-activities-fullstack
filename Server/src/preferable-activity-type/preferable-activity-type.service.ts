import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreatePreferableActivityTypeDto } from './dto/create-preferable-activity-type.dto';
import { UpdatePreferableActivityTypeDto } from './dto/update-preferable-activity-type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PreferableActivityType } from './entities/preferable-activity-type.entity';
import { Repository } from 'typeorm';
import { UserService } from '../user/user.service';
import { ActivityTypeService } from '../activity-type/activity-type.service';

@Injectable()
export class PreferableActivityTypeService {
  constructor(
    @InjectRepository(PreferableActivityType)
    private readonly prefRepo: Repository<PreferableActivityType>,
    private readonly userService: UserService,
    private readonly activityTypeService: ActivityTypeService,
  ) {}
  async create(
    createDto: CreatePreferableActivityTypeDto,
  ): Promise<PreferableActivityType> {
    //   verify user exist
    const user = await this.userService.findOne(createDto.userId);

    //   verify activity type exist
    const activityType = await this.activityTypeService.findOne(
      createDto.activityTypeId,
    );

    const newPref = this.prefRepo.create({
      user: user,
      activityType: activityType,
    });

    //   check for existing preference
    const existing = await this.prefRepo.findOne({
      where: {
        user: { id: createDto.userId },
        activityType: { id: createDto.activityTypeId },
      },
    });

    if (existing) {
      throw new ConflictException('This preference already exists');
    }
    return this.prefRepo.save(newPref);
  }
  async remove(id: number): Promise<void> {
    const results = await this.prefRepo.delete(id);
    if (results.affected === 0) {
      throw new NotFoundException(`Preference ${id} not found`);
    }
  }

  async findByUser(userId: number): Promise<PreferableActivityType[]> {
    return this.prefRepo.find({
      where: { user: { id: userId } },
      relations: ['user', 'activityType'],
    });
  }
}
