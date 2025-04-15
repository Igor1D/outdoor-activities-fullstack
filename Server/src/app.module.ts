import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ActivitiesModule } from './activities/activities.module';
import { ActivityAttendeeModule } from './activity-attendee/activity-attendee.module';
import { ActivityTypeModule } from './activity-type/activity-type.module';
import { ActivityDifficultyLevelModule } from './activity-difficulty-level/activity-difficulty-level.module';
import { PreferableActivityTypeModule } from './preferable-activity-type/preferable-activity-type.module';

@Module({
  imports: [
    UserModule,
    AuthModule,
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    ActivitiesModule,
    ActivityAttendeeModule,
    ActivityTypeModule,
    ActivityDifficultyLevelModule,
    PreferableActivityTypeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
