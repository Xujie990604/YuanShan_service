import { Request, Response, NextFunction } from 'express';

// 全局的中间件
export const middleWareAll = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log(req.originalUrl);
  next();
};
