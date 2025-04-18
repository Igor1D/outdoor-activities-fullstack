import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    const existUser = await this.userRepository.findOne({
      where: {
        email: createUserDto.email,
      },
    });
    if (existUser) throw new BadRequestException('This email already exist');

    const newUser = await this.userRepository.save({
      userName: createUserDto.userName,
      firstName: createUserDto.firstName,
      lastName: createUserDto.lastName,
      birthDay: createUserDto.birthDay,
      email: createUserDto.email,
      phoneNumber: createUserDto.phoneNumber,
      country: createUserDto.country,
      status: createUserDto.status,
      gender: createUserDto.gender,
      password: await argon2.hash(createUserDto.password),
    });

    return { newUser };
  }

  // findAll() {
  //   return `This action returns all user`;
  // }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
