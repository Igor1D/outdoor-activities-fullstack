import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { ActivityTypeService } from './activity-type.service';
import { CreateActivityTypeDto } from './dto/create-activity-type.dto';
import { UpdateActivityTypeDto } from './dto/update-activity-type.dto';
import { ActivityType } from './entities/activity-type.entity';
import { ActivityTypeResponseDto } from './dto/activity-type-response.dto';

@Controller('activity-type')
export class ActivityTypeController {
  constructor(private readonly activityTypeService: ActivityTypeService) {}

  @Post()
  async create(
    @Body() createDto: CreateActivityTypeDto,
  ): Promise<ActivityTypeResponseDto> {
    return this.activityTypeService.create(createDto);
  }

  @Get()
  async findAll(): Promise<ActivityTypeResponseDto[]> {
    return this.activityTypeService.findAll();
  }

  @Get(':id')
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ActivityTypeResponseDto> {
    return this.activityTypeService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateActivityTypeDto,
  ): Promise<ActivityTypeResponseDto> {
    return this.activityTypeService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.activityTypeService.remove(id);
  }
}
