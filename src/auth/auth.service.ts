import { Body, Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { userDto } from "src/dtos/user.dto";
import { UsersService } from "src/users/service/users.service";
import * as argon2 from "argon2";

@Injectable()
export class AuthService {

    constructor(
        private readonly userService: UsersService,
        private  readonly jwtService: JwtService
    ) {}

    signUp(body: userDto) {
        this.userService.createUser(body);
     }
     
     async signIn(body:any) {
        const {email, passwords} = body

        console.log(email, passwords)
       const user: userDto = await this.userService.getEmail(email);
    //    console.log(user)
       const checkPassword = await argon2.verify(user.passwords, passwords);
       console.log(checkPassword)
       if (!user || !checkPassword) {
         throw new UnauthorizedException(' email hoặc password không đúng');  
       }
       return{
         user: user,
         token: await this.generateToken({email: user.email, id: user.idUser,nameUser : user.nameUser,role: user.role}),
         access_token: await this.generateAccessToken({email: user.email, id: user.idUser}),
       }
     }
     
     async generateToken(payload) {
       return this.jwtService.sign(payload,{
         expiresIn: '1d',
         secret: 'token'
       });
     }
     async generateAccessToken(payload) {
       return this.jwtService.sign(payload,{
         expiresIn: '1d',
         secret: 'access-token'
       });
     }
     async verifyAccessToken(token: string) {
      // console.log("token", token)
       return await this.jwtService.verify(token, {
         secret: 'token'
       });
     } 
}