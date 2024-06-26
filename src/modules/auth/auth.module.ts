import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtModule } from "@nestjs/jwt";
import { env } from "process";
import { jwtConstants } from "./auth.constants";

@Module({
    imports : [PrismaModule, 
        JwtModule.register({
            global : true,
            secret : jwtConstants.secret,
            signOptions : { expiresIn : "1d" }
        })
    ],
    controllers : [AuthController],
    providers : [AuthService],
    exports : [AuthService]
})
export class AuthModule {}