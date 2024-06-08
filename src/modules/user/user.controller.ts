import { Body, Controller, Delete, Get, HttpCode, Param, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UserUpdateDTO } from "./dtos/user.update.DTO";
import { UserId } from "src/common/decorators/user.id.decorator";
import { LogInterceptor } from "src/common/interceptors/log.interceptor";

@Controller("user")
@UseGuards(AuthGuard)
@UseInterceptors(LogInterceptor)
export class UserController {

    constructor(private userService : UserService){}
    
    @Get()
    async getUser(@UserId() userId : number ){    
        return this.userService.getUser(userId)
    }

    @Put("")
    async updateUser(@UserId( ) userId : number, @Body() body : UserUpdateDTO){
        return this.userService.updateUser(userId, body)
    }

    @Delete()
    @HttpCode(204) 
    async deleteUser(@UserId() userId : number){
        return this.userService.deleteUser(userId)
    }


}