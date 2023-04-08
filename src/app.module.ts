import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataBaseConnection } from './common/Database/database.connect';

@Module({
  imports: [
    // 连接数据库
    TypeOrmModule.forRoot(dataBaseConnection),
    // 加载子模块
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
