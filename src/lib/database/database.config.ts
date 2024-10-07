import { SequelizeModuleOptions } from '@nestjs/sequelize';
import pg from 'pg';
import { User } from 'src/users/entities/user.entity';

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'postgres',
  dialectModule: pg,
  host: 'ls-84a050d3c8054bff6a276d7fbacb38f6dffda0cb.c3psaafrxcpx.ap-southeast-1.rds.amazonaws.com',
  port: 5432,
  username: 'dbmasteruser',
  password: 'testobnb1234567890',
  database: 'noormaulida',
  synchronize: true,
  autoLoadModels: true,
  models: [User],
};