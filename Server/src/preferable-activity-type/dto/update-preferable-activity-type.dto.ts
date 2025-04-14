import { PartialType } from '@nestjs/mapped-types';
import { CreatePreferableActivityTypeDto } from './create-preferable-activity-type.dto';

export class UpdatePreferableActivityTypeDto extends PartialType(CreatePreferableActivityTypeDto) {}
