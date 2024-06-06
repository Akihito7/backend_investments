import { Controller, Delete, Get, Param, Put, Req } from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("user")
export class UserController {

    constructor(private userService : UserService){}

    @Get(":id")
    getUser(@Param("id") id : string){
        return this.userService.getUser()
    }

    @Put(":id/:name")
    updateUser(@Param() params){
        console.log(params)
        return this.userService.updateUser()
    }

    @Delete()
    deleteUser(){
        return this.userService.deleteUser()
    }


}