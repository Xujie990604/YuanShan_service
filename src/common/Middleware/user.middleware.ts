import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
// 中间件的类要用装饰器 Injectable 并且实现 NestMiddleware 接口
export class userMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('经过了 user 路由中间件');
    next();
  }
}
