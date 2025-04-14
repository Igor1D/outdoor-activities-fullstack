import { Module } from '@nestjs/common';
import { PreferableActivityTypeService } from './preferable-activity-type.service';
import { PreferableActivityTypeController } from './preferable-activity-type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PreferableActivityType } from './entities/preferable-activity-type.entity';
import { UserModule } from '../user/user.module';
import { ActivityTypeModule } from '../activity-type/activity-type.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([PreferableActivityType]),
    UserModule,
    ActivityTypeModule,
  ],
  controllers: [PreferableActivityTypeController],
  providers: [PreferableActivityTypeService],
  exports: [TypeOrmModule],
})
export class PreferableActivityTypeModule {}
