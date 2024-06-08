import { Body, Controller, Delete, Get, HttpCode, Param, Put, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UserUpdateDTO } from "./dtos/user.update.DTO";
import { UserId } from "src/common/decorators/user.id.decorator";

@Controller("user")
@UseGuards(AuthGuard)
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

    @HttpCode(204) 
    @Delete()
    async deleteUser(@UserId() userId : number){
        return this.userService.deleteUser(userId)
    }


}