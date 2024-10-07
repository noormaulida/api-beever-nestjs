import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class LoginUserDto {
    @IsNotEmpty()
    readonly email: string;

    @IsNotEmpty()
    readonly password: string;
}