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
import { PreferableActivityTypeService } from './preferable-activity-type.service';
import { CreatePreferableActivityTypeDto } from './dto/create-preferable-activity-type.dto';
import { UpdatePreferableActivityTypeDto } from './dto/update-preferable-activity-type.dto';
import { PreferableActivityTypeResponseDto } from './dto/preferable-activity-type-response.dto';

@Controller('preferable-activity-type')
@UseInterceptors(ClassSerializerInterceptor)
export class PreferableActivityTypeController {
  constructor(private readonly service: PreferableActivityTypeService) {}

  @Post()
  create(
    @Body() createDto: CreatePreferableActivityTypeDto,
  ): Promise<PreferableActivityTypeResponseDto> {
    return this.service.create(createDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.service.remove(id);
  }

  @Get('user/:userId')
  findByUser(
    @Param('userId', ParseIntPipe) userId: number,
  ): Promise<PreferableActivityTypeResponseDto[]> {
    return this.service.findByUser(userId);
  }
}
