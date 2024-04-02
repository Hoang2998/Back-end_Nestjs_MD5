import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/users/service/users.service";
import { userDto } from "src/dtos/user.dto";

@Controller()
export class AuthController {
   constructor(
    private readonly authService: AuthService,
    private  readonly userService: UsersService
   ) {}
   
   @Post("login")
   async login(@Body() body: string) {
    const result = await this.authService.signIn(body);
    return {
        message:"login success", 
        data: result
    }
   }

   @Post("addUser")
   async register(@Body() body: userDto) {
    return this.authService.signUp(body);
}   
}