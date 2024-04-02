import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Films } from "./films.entity";
import { Category } from "./category.entity";


@Entity("categoryforfilm")
export class Categoryforfilms {
    @PrimaryGeneratedColumn("increment")
    idCategorysforFilm: number;

    @ManyToOne(type => Films, film => film.categoryforfilms)
    @JoinColumn({ name:"idFilm" })
    films: Films;

    @ManyToOne(type => Category, category => category.categoryforfilms)
    @JoinColumn({ name: "idCategory" })
    category: Category;
    
}