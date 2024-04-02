import { ExecutionContext, HttpException, HttpStatus, Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "src/auth/auth.service";

@Injectable()
export class AuthorGuard { 
    constructor(private readonly authService: AuthService) {}
    canActivate(context: ExecutionContext):Promise<boolean> |boolean {
       console.log("context", context);
       const request = context.switchToHttp().getRequest();
       const responce = context.switchToHttp().getResponse();

        
       const token = request.headers.authorization;
      //  console.log("token", token);

       if(!token?.startsWith("Bearer")) throw new UnauthorizedException("please login");

       const newToken = token.split(" ")[1]; 
    //    console.log("newToken", newToken);
       const checkToken =  this.authService.verifyAccessToken(newToken).then((res)=>{
         request["user"] = res;
         if(res.role !== 1 ){
            throw new UnauthorizedException("you are not an author");
         }
         // console.log("checkToken", res);
       });
         
       if(!checkToken){
        throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
       }
      //  request["user"] = checkToken;
       return true
    }
}