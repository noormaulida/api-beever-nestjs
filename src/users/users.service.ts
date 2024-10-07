import { Injectable } from '@nestjs/common';
import { RegisterUserDto } from './dto/register-user.dto';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';


@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User)
    private userRepository: typeof User,
  ) { }

  async create(registerUserDto: RegisterUserDto) {
    return this.userRepository.create(registerUserDto as any);
  }

  async findOneById(id: number) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findOneByUsername(username: string) {
    return this.userRepository.findOne({ where: { username: username } });
  }

  async remove(id: number) {
    return this.userRepository.destroy({ where: { id: id } });
  }
}
