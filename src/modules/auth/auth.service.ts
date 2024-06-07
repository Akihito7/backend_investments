import { Injectable, NotFoundException, UnauthorizedException } from "@nestjs/common";
import { AuthSignupDTO } from "./dtos/auth.signup.dto";
import { hash, compare } from "bcrypt"
import { PrismaService } from "../prisma/prisma.service";
import { AuthSignlnDTO } from "./dtos/auth.signln.dto";
import { JwtService } from '@nestjs/jwt';



@Injectable()
export class AuthService {

    constructor(
        private prismaService: PrismaService,
        private jwtService: JwtService
    ) {}

    async signup(data: AuthSignupDTO) {

        const alreadyEmailExists = await this.prismaService.user.count({
            where: { email: data.email }
        });

        if (alreadyEmailExists) throw new UnauthorizedException("E-mail já em uso");

        data.password = await hash(data.password, 8)

        return this.prismaService.user.create({ data });
    }

    async signln(data: AuthSignlnDTO) {

        const user = await this.prismaService.user.findFirst({
            where: {
                email: data.email
            }
        })

        if (!user) throw new NotFoundException("E-mail e/ou senhas incorretos");

        const passwordMatch = await compare(data.password, user.password);

        if (!passwordMatch) throw new NotFoundException("E-mail e/ou senhas incorretos");

        const payload =  { sub: user.id, username: user.name };

        const token = await this.jwtService.signAsync(payload)

        return { user, token }
    }
}