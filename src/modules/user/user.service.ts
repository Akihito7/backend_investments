import { Injectable } from "@nestjs/common";

@Injectable()
export class UserService {
    getUser(){
        return "GET USER"
    }

    updateUser(){
        return "UPDATE USER"
    } 

    deleteUser(){
        return "DELETE USER"
    }
}