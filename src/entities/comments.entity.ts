import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Films } from "./films.entity";

@Entity("comments")
export class Comments {
    @PrimaryGeneratedColumn()
    idComment: number;

    @Column({
        type:"varchar",
        length: 255
    })
    comment: string;

    @Column({
        type:"int",
    })
    rate: number;

    @ManyToOne(() => Users, (users) => users.comments)
    @JoinColumn({ name: "idUser" })
    users: Users;

    @ManyToOne(() => Films, (film) => film.comments)
    @JoinColumn({ name: "idFilm" })
    films: Films;

}