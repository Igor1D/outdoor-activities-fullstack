import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { ActivityDifficultyLevelService } from './activity-difficulty-level.service';
import { CreateActivityDifficultyLevelDto } from './dto/create-activity-difficulty-level.dto';
import { UpdateActivityDifficultyLevelDto } from './dto/update-activity-difficulty-level.dto';
import { DifficultyLevelResponseDto } from './dto/difficulty-level-response.dto';
import { ActivityDifficultyLevel } from './entities/activity-difficulty-level.entity';

@Controller('activity-difficulty-level')
@UseInterceptors(ClassSerializerInterceptor)
export class ActivityDifficultyLevelController {
  constructor(
    private readonly activityDifficultyLevelService: ActivityDifficultyLevelService,
  ) {}

  @Get()
  async findAll(): Promise<DifficultyLevelResponseDto[]> {
    const levels = await this.activityDifficultyLevelService.findAll();
    if (!levels?.length) throw new NotFoundException();
    return levels.map((level) => new DifficultyLevelResponseDto(level)); // transformed to DTO format
  }
  @Get(':id') //ParseInPipe - Converts string params to numbers
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DifficultyLevelResponseDto> {
    const level = await this.activityDifficultyLevelService.findOne(id);
    if (!level) throw new NotFoundException();
    return new DifficultyLevelResponseDto(level);
  }
}
