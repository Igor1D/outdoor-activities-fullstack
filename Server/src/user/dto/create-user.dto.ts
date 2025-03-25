import { IsEmail, MinLength } from 'class-validator';
import { Status, Gender } from '../entities/user.entity';

export class CreateUserDto {
  userName?: string;
  firstName?: string;
  lastName?: string;
  birthDay?: Date;
  @IsEmail()
  email: string;
  phoneNumber?: string;
  country?: string;
  status?: Status;
  gender?: Gender;
  @MinLength(8, { message: 'Password must be more then 8 symbols' })
  password: string;
}
