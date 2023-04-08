import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { middleWareAll } from './common/Middleware/global.middleware';
import { ResponseInterceptor } from './common/Inteceptor/response.inteceptor';
import { HttpFilter } from './common//ExceptionFilter/http.ExceptionFilter';
import { RoleGuard } from './common/guard/role.guard';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // 注册全局的中间件
  app.use(middleWareAll);
  // 注册全局的守卫
  app.useGlobalGuards(new RoleGuard());
  // 注册全局的拦截器
  app.useGlobalInterceptors(new ResponseInterceptor());
  // 注册全局的数据格式验证管道
  app.useGlobalPipes(new ValidationPipe());
  // 注册全局的异常拦截器
  app.useGlobalFilters(new HttpFilter());
  await app.listen(3000);
}
bootstrap();
