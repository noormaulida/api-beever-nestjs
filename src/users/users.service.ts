import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userModel: typeof User,
  ) { }

  async create(registerUserDto: RegisterUserDto) {
    return await this.userModel.create(registerUserDto as any);
  }

  async findOneById(id: number) {
    return await this.userModel.findOne({ where: { id: id } });
  }

  async findOneByEmail(email: string) {
    return await this.userModel.findOne({ where: { email: email } });
  }

  async remove(id: number) {
    return await this.userModel.destroy({ where: { id: id } });
  }
}
