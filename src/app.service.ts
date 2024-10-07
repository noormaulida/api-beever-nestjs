import { Injectable } from '@nestjs/common';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class AppService {
  serverStatus(): string {
    return 'Server is up at port 3000 🚀';
  }
}
