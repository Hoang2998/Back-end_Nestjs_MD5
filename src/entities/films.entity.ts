import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoryforfilms } from "./categoryforfilm.entity";
import { Adminshowtime } from "./adminshowtime.entity";
import { Comments } from "./comments.entity";

@Entity("films")
export class Films {
    @PrimaryGeneratedColumn("increment")
    idFilm: number;

    @Column({
        type:"varchar",
        length: 50
    })
    nameFilm: string;

    @Column({
        type:"varchar",
        length: 50
    })
    releaseDate: string;

    @Column({
        type:"varchar",
        length: 50
    })
    duration: string;

    @Column({
        type:"longtext"
    })
    imageFilm: string;

    @Column({
        type:"longtext"
    })
    detailFilm: string;

    @Column({
        type:"longtext"
    })
    trailer: string;
    @OneToMany(type => Categoryforfilms, categoryforfilms => categoryforfilms.films, { cascade: true })
    categoryforfilms: Categoryforfilms[]

    @OneToMany(type => Adminshowtime, adminshowtime => adminshowtime.films)
    adminshowtime: Adminshowtime[]

    @OneToMany(type => Comments, comments => comments.films)
    comments: Comments[]
}