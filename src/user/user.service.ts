import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Like } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // 用户注册的 service
  async register(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  // 获取所有用户信息的 service
  async findAll() {
    return await this.userRepository.find();
  }

  // 根据用户名模糊查询 service
  async findByKeyWord(query: string) {
    return await this.userRepository.find({
      where: {
        name: Like(`%${query}%`),
      },
    });
  }

  // 根据 ID 修改用户信息
  async update(id: number, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update(id, updateUserDto);
  }
  // 删除用户的 service
  async remove(id: number) {
    return await this.userRepository.delete(id);
  }
}
