import { Expose } from 'class-transformer';
import { ActivityLocation } from '../entities/activity-location.entity';

export class ActivityLocationResponseDto {
  @Expose()
  id: number;

  @Expose()
  address: string;

  @Expose()
  coordinates: string;

  @Expose()
  get activityId(): number {
    return this.activity.id;
  }

  activity: ActivityLocation['activity']; // Maintain relationship
}
