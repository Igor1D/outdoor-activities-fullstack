import { IsNotEmpty, IsString } from 'class-validator';

export class CreateActivityLocationDto {
  @IsNotEmpty()
  activityId: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  coordinates: string;
}
