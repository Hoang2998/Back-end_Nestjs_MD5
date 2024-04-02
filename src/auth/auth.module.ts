import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UsersModule } from "src/users/users.module";
import { JwtModule } from "@nestjs/jwt";
import { TicketModule } from "src/modules/ticket/ticket.module";

@Module({
    imports: [forwardRef(()=>UsersModule),JwtModule.register({}),forwardRef(()=>TicketModule)],
    controllers: [AuthController],
    providers: [AuthService],
    exports: [AuthService]
})
export class AuthModule { }