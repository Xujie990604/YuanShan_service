import { IsNotEmpty, IsString, Length } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @Length(3, 20, {
    message: '用户名长度不满足3-20个字符',
  })
  name: string;

  @IsNotEmpty()
  @IsString()
  @Length(5, 20, {
    message: '密码长度不满足5-20个字符',
  })
  password: string;

  @IsString()
  nickname: string;
}
