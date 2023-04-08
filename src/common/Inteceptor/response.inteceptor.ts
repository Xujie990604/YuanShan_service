import { NestInterceptor, CallHandler, Injectable } from '@nestjs/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

interface Data<T> {
  data: T;
}

@Injectable()
export class ResponseInterceptor<T> implements NestInterceptor {
  intercept(context, next: CallHandler): Observable<Data<T>> {
    // 在调用 next() 函数之前写的代码会在 Controller 之前执行
    // 在调用 next() 函数之后写的代码会在 Controller 之后执行
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          status: 200,
          message: 'Success.',
        };
      }),
    );
  }
}
