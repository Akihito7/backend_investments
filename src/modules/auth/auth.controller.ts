import { Body, Controller, Post } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { AuthSignupDTO } from "./dtos/auth.signup.dto"
import { AuthSignlnDTO } from "./dtos/auth.signln.dto"
import { hash } from "bcrypt"

@Controller("auth")
export class AuthController {
    constructor(private authService : AuthService) {}

    @Post("signup")
    signup(@Body() body : AuthSignupDTO){
        return this.authService.signup(body)
    }

    @Post("signln")
    signln(@Body() body : AuthSignlnDTO){
        return this.authService.signln(body)
    }
}