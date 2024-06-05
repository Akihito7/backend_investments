import { Controller, Delete, Get, Put } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

    constructor(private userService : UserService){}

    @Get()
    getUser(){
        return this.userService.getUser()
    }

    @Put()
    updateUser(){
        return this.userService.updateUser()
    }

    @Delete()
    deleteUser(){
        return this.userService.deleteUser()
    }


}