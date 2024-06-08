import { Body, Controller, Delete, Get, HttpCode, Param, Put, Req, UseGuards } from "@nestjs/common";
import { UserService } from "./user.service";
import { AuthGuard } from "src/common/guards/auth.guard";
import { UserUpdateDTO } from "./dtos/user.update.DTO";

@Controller("user")
@UseGuards(AuthGuard)
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    async getUser(@Req() req : any){
        const userId = req.user.id
        return this.userService.getUser(userId)
    }

    @Put("")
    async updateUser(@Req() req : any, @Body() body : UserUpdateDTO){
        const userId = req.user.id
        return this.userService.updateUser(userId, body)
    }

    @HttpCode(204) 
    @Delete()
    async deleteUser(@Req() req : any){
        const userId = req.user.id
        return this.userService.deleteUser(userId)
    }


}