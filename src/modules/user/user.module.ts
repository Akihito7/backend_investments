import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { AuthService } from "../auth/auth.service";
import { AuthModule } from "../auth/auth.module";
import { PrismaModule } from "../prisma/prisma.module";

@Module({
    imports : [AuthModule, PrismaModule],
    controllers : [UserController],
    providers : [UserService],
    exports : []
})

export class UserModule {}