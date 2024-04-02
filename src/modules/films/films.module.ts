import { Module, forwardRef } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Films } from "src/entities/films.entity";
import { FilmsController } from "./films.controller";
import { FilmsService } from "./films.service";
import { Categoryforfilms } from "src/entities/categoryforfilm.entity";
import { AuthModule } from "src/auth/auth.module";

@Module({
    imports: [TypeOrmModule.forFeature([Films, Categoryforfilms]),
    forwardRef(() => AuthModule)
    ],
    controllers: [FilmsController],
    providers: [FilmsService],
    exports: [],
})
export class FilmsModule {}