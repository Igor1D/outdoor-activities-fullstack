import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ActivityDifficultyLevelService } from './activity-difficulty-level.service';
import { CreateActivityDifficultyLevelDto } from './dto/create-activity-difficulty-level.dto';
import { UpdateActivityDifficultyLevelDto } from './dto/update-activity-difficulty-level.dto';

@Controller('activity-difficulty-level')
export class ActivityDifficultyLevelController {
  constructor(private readonly activityDifficultyLevelService: ActivityDifficultyLevelService) {}

  @Post()
  create(@Body() createActivityDifficultyLevelDto: CreateActivityDifficultyLevelDto) {
    return this.activityDifficultyLevelService.create(createActivityDifficultyLevelDto);
  }

  @Get()
  findAll() {
    return this.activityDifficultyLevelService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.activityDifficultyLevelService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateActivityDifficultyLevelDto: UpdateActivityDifficultyLevelDto) {
    return this.activityDifficultyLevelService.update(+id, updateActivityDifficultyLevelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.activityDifficultyLevelService.remove(+id);
  }
}
