import { PartialType } from '@nestjs/mapped-types';
import { CreateActivityLocationDto } from './create-activity-location.dto';
import { Expose } from 'class-transformer';

export class UpdateActivityLocationDto extends PartialType(
  CreateActivityLocationDto,
) {}
