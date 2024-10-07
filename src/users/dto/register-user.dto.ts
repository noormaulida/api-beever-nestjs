import { IsNotEmpty, IsEmail, IsStrongPassword } from 'class-validator';

export class RegisterUserDto {
    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @IsStrongPassword({
        minLowercase: 1,
        minNumbers: 1,
        minSymbols: 1,
        minUppercase: 1
    }, { message: 'your password must contain at least one number and have a mixture of uppercase and lowercase letters' })
    readonly password: string;
}