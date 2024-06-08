import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { UserUpdateDTO } from "./dtos/user.update.DTO";
import { hash } from "bcrypt"

@Injectable()
export class UserService {

    constructor(private prismaService: PrismaService) { }

    async getUser(userId: number) {

        const user = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        if (!user) throw new NotFoundException("Usúario não encontrado");

        return user
    }

    async updateUser(userId: number, data: UserUpdateDTO) {

        let user = await this.prismaService.user.findUnique({
            where: { id: userId }
        })

        if (!user) throw new NotFoundException("Usúario não encontrado");

        if (data.password) data.password = await hash(data.password, 8);

        return this.prismaService.user.update({
            where: { id: user.id },
            data
        })

    }

    async deleteUser(userId : number) {

        const userExists = await this.prismaService.user.count({
            where : { id: userId }
        })

        if(!userExists) throw new NotFoundException("Usúario inexistente");
        await this.prismaService.user.delete({
            where: { id: userId }
        })

        return { message: 'Usuário excluído com sucesso' }
    }
}