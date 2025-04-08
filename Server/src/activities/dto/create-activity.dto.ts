import { IsDateString, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  description: string;

  @IsInt()
  @IsNotEmpty()
  activityTypeId: number;

  @IsInt()
  @IsNotEmpty()
  difficultyLevelId: number;

  @IsDateString()
  startTime: Date;

  @IsInt()
  @IsNotEmpty()
  address: number;

  coordinates: string;
}
