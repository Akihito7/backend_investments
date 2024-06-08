import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { AuthService } from "src/modules/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private authService : AuthService){}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

        const request = context.switchToHttp().getRequest()

        const token = request.headers.authorization;

        let { sub : id } = this.authService.verifyToken(token);

        request.user = {
            id : Number(id)
        }

        return true
    }
}
