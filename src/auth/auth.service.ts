import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { RegisterUserDto } from '../users/dto/register-user.dto';
import { LoginUserDto } from '../users/dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) { }

  public async register(registerUserDto: RegisterUserDto) {
    const pass = await this.hashPassword(registerUserDto.password);
    const createdUser = await this.userService.create({ ...registerUserDto, password: pass });

    const { password, ...result } = createdUser['dataValues'];
    return { user: result };
  }

  public async login(loginUserDto: LoginUserDto) {
    const validated = await this.validateUser(loginUserDto.email, loginUserDto.password);

    if (!validated) {
      return null;
    }

    const { id, email, name } = validated;
    const payload = { sub: id, email, name };
    const token = await this.generateToken(payload);
    return { payload, token };
  }

  async validateUser(email: string, pass: string) {
    const user = await this.userService.findOneByEmail(email);
    if (!user) {
      return null;
    }

    const isPasswordMatched = await this.comparePassword(pass, user.password);

    if (!isPasswordMatched) {
      return null;
    }

    const { password, ...result } = user['dataValues'];
    return result;
  }

  private async generateToken(user: any) {
    const token = await this.jwtService.signAsync(user);
    return token;
  }

  private async hashPassword(password: string) {
    const hash = await bcrypt.hash(password, 10);
    return hash;
  }

  private async comparePassword(inputPassword: string, databasePassword: string) {
    const match = await bcrypt.compare(inputPassword, databasePassword);
    return match;
  }
}