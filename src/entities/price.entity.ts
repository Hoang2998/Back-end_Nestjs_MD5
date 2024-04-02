import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Chair } from "./chair.entity";


@Entity("price")
export class Price {
    @PrimaryGeneratedColumn("increment")
    idPrice: number;

    @Column({
        type:"varchar",
        length: 255
    })
    namePrice: string;
    @Column({
        type:"varchar",
        length: 255
    })
    price: string;

    @OneToMany(type => Chair, chair => chair.price)
    chair: Chair
}