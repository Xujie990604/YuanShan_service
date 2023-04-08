import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const dataBaseConnection: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'xujie123',
  database: 'yuanshan',
  autoLoadEntities: true,
  synchronize: true,
};
