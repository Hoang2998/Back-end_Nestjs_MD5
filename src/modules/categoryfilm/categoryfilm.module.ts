import { Module } from "@nestjs/common";
import { CategoryfilmController } from "./controller/categoryfilm.controller";
import { CategoryfilmService } from "./service/categoryfilm.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Category } from "src/entities/category.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Category])],
    controllers: [CategoryfilmController],
    providers: [CategoryfilmService],
    exports: [],
})
export class CategoryfilmModule {}