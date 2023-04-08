import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  // 用户注册
  create(@Body() body: CreateUserDto) {
    return this.userService.register(body);
  }

  @Get('list')
  // 获取所有用户的信息
  findAll() {
    return this.userService.findAll();
  }

  @Get('query')
  // 根据用户名模糊查询
  findOne(@Query() query: { keyWord: string }) {
    return this.userService.findByKeyWord(query.keyWord);
  }

  @Post('update')
  update(@Body('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Post('delete')
  // 根据指定 ID 删除用户
  remove(@Body() body: { id: number }) {
    return this.userService.remove(body.id);
  }
}
