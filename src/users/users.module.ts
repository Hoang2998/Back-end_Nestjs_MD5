import { Module, forwardRef } from "@nestjs/common";
import { UsersService } from "./service/users.service";
import { UsersController } from "./controller/users.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/entities/users.entity";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Users]),
    forwardRef(() => AuthModule)
],
    controllers: [UsersController],
    providers: [UsersService],
    exports: [UsersService],
})

export class UsersModule {}