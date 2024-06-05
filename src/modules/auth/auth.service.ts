import { Injectable } from "@nestjs/common";


@Injectable()
export class AuthService{

    signup(){
        return "SIGNUP DO AUTH"
    }

    signln(){
        return "SIGNLN DO AUTH"
    }
}