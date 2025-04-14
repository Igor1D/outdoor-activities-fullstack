import { Expose } from 'class-transformer';

export class ActivityTypeResponseDto {
  @Expose()
  id: number;

  @Expose()
  name: string;
}
