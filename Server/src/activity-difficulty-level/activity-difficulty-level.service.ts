import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { CreateActivityDifficultyLevelDto } from './dto/create-activity-difficulty-level.dto';
import { UpdateActivityDifficultyLevelDto } from './dto/update-activity-difficulty-level.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ActivityDifficultyLevel } from './entities/activity-difficulty-level.entity';
import { Repository } from 'typeorm';
import { DifficultyLevelEnum } from '../enums/activity.enum';
import * as console from 'node:console';

@Injectable()
export class ActivityDifficultyLevelService implements OnApplicationBootstrap {
  constructor(
    @InjectRepository(ActivityDifficultyLevel)
    private readonly difficultyLevelRepo: Repository<ActivityDifficultyLevel>,
  ) {}
  async onApplicationBootstrap() {
    await this.seedDifficultyLevels();
  }

  private async seedDifficultyLevels() {
    const existing = await this.difficultyLevelRepo.count();

    if (existing === 0) {
      const levels = Object.values(DifficultyLevelEnum).map((name) => ({
        name,
      }));
      await this.difficultyLevelRepo.save(levels);
      console.log('Difficulty levels seeded');
    }
  }
}
