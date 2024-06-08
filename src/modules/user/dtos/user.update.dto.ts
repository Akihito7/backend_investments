import { IsDateString, IsEmail, IsOptional, IsString, IsStrongPassword } from "class-validator";

export class UserUpdateDTO {

    @IsOptional()
    @IsEmail()
    email? : string;

    @IsOptional()
    @IsString()
    name? : string;

    @IsOptional()
    @IsDateString()
    birthdate? : string;

    @IsOptional()
    @IsStrongPassword({
        minLength: 6,
        minLowercase: 0,
        minNumbers: 0,
        minSymbols: 0,
        minUppercase: 0,
    })
    password : string;
}