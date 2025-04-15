import {
  Injectable,
  NotFoundException,
  OnApplicationBootstrap,
  OnModuleInit,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { ActivityDifficultyLevel } from './entities/activity-difficulty-level.entity';
import { Repository } from 'typeorm';
import { DifficultyLevelEnum } from '../enums/activity.enum';
import * as console from 'node:console';

@Injectable()
export class ActivityDifficultLevelService implements OnModuleInit {
  constructor(
    @InjectRepository(ActivityDifficultyLevel)
    private readonly levelRepo: Repository<ActivityDifficultyLevel>,
  ) {}

  async onModuleInit() {
    await this.seedDifficultyLevels();
  }

  private async seedDifficultyLevels() {
    const existing = await this.levelRepo.count();
    if (existing > 0) return;

    const levels = Object.values(DifficultyLevelEnum).map((name) => ({ name }));
    await this.levelRepo.save(levels);
  }

  async findAll(): Promise<ActivityDifficultyLevel[]> {
    return this.levelRepo.find();
  }

  async findOne(id: number): Promise<ActivityDifficultyLevel> {
    return this.levelRepo.findOne({ where: { id } });
  }
}

// @Injectable()
// export class ActivityDifficultyLevelService implements OnApplicationBootstrap {
//   constructor(
//     @InjectRepository(ActivityDifficultyLevel) // get typeorm repo
//     private readonly difficultyLevelRepo: Repository<ActivityDifficultyLevel>,
//   ) {}
//
//   async findAll(): Promise<ActivityDifficultyLevel[]> {
//     return this.difficultyLevelRepo.find(); // get all records
//   }
//
//   async findOne(id: number): Promise<ActivityDifficultyLevel | null> {
//     // return this.difficultyLevelRepo.findOneBy({ id }); // find by ID
//     const level = await this.difficultyLevelRepo.findOne({ where: { id } });
//     if (!level) throw new NotFoundException();
//     return level;
//   }
//
//   async onApplicationBootstrap() {
//     await this.seedDifficultyLevels();
//   }
//
//   private async seedDifficultyLevels() {
//     const existing = await this.difficultyLevelRepo.count();
//
//     if (existing === 0) {
//       const levels = Object.values(DifficultyLevelEnum).map((name) => ({
//         name,
//       }));
//       await this.difficultyLevelRepo.save(levels);
//       console.log('Difficulty levels seeded');
//     }
//   }
// }
