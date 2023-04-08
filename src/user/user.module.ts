import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { userMiddleware } from 'src/common/Middleware/user.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UserController],
  providers: [UserService],
})

// 注册中间件的模块必须实现 NestModule 接口
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(userMiddleware).forRoutes('user');
  }
}
