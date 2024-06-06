import { IsEmail, IsString, IsStrongPassword } from "class-validator"

export class AuthSignupDTO {

    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
    })
    password: string;

    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
    })
    passwordAgain: string;
}