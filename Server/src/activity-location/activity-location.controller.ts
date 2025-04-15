import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  ParseIntPipe,
} from '@nestjs/common';
import { ActivityLocationService } from './activity-location.service';
import { CreateActivityLocationDto } from './dto/create-activity-location.dto';
import { UpdateActivityLocationDto } from './dto/update-activity-location.dto';
import { ActivityLocation } from './entities/activity-location.entity';
import { ActivityLocationResponseDto } from './dto/activity-location-response.dto';
import { plainToInstance } from 'class-transformer';

@Controller('activity-location')
@UseInterceptors(ClassSerializerInterceptor)
export class ActivityLocationController {
  constructor(
    private readonly activityLocationService: ActivityLocationService,
  ) {}

  @Post()
  async create(
    @Body() createDto: CreateActivityLocationDto,
  ): Promise<ActivityLocationResponseDto> {
    const location = await this.activityLocationService.create(createDto);
    return plainToInstance(ActivityLocationResponseDto, location);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateActivityLocationDto: UpdateActivityLocationDto,
  ) {
    return this.activityLocationService.update(id, updateActivityLocationDto);
  }

  @Get('activity/:activityId')
  async findByActivity(
    @Param('activityId', ParseIntPipe) activityId: number,
  ): Promise<ActivityLocationResponseDto> {
    const location =
      await this.activityLocationService.findByActivity(activityId);
    return plainToInstance(ActivityLocationResponseDto, location);
  }
}
