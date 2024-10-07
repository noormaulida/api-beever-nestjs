import pg from 'pg';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'postgres',
      dialectModule: pg,
      host: 'ls-84a050d3c8054bff6a276d7fbacb38f6dffda0cb.c3psaafrxcpx.ap-southeast-1.rds.amazonaws.com',
      port: 5432,
      username: 'dbmasteruser',
      password: 'testobnb1234567890',
      database: 'noormaulida',
      models: [],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
