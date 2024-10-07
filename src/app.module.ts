import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { SequelizeModule } from '@nestjs/sequelize';
import { dataBaseConfig } from './lib/database/database.config';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { QuotesModule } from './quotes/quotes.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    QuotesModule,
    SequelizeModule.forRoot(dataBaseConfig),
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService
  ],
})
export class AppModule { }
