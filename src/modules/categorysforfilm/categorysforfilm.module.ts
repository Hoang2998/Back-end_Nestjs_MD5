import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Categoryforfilms } from "src/entities/categoryforfilm.entity";
import { CategorysforfilmController } from "./categorysforfilm.controller";
import { CategorysforfilmService } from "./categorysforfilm.service";
import { Category } from "src/entities/category.entity";
import { Films } from "src/entities/films.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Categoryforfilms,Category,Films])],
    controllers: [CategorysforfilmController],
    providers: [CategorysforfilmService],
    exports: [],
})
export class CategorysforfilmModule {}