import { IsNotEmpty, MinLength, IsEmail, IsEnum } from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;
}