import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Price } from "./price.entity";
import { Ticket } from "./ticket.entity";


@Entity("chair")
export class Chair {
    @PrimaryGeneratedColumn("increment")
    idChair: number;

    @Column({
        type:"varchar",
        length: 255
    })
    nameChair: string;

    @ManyToOne(type => Price, price => price.chair)
    @JoinColumn({ name: "idPrice" })
    price: Price;

    @OneToMany(type => Ticket, ticket => ticket.chair)
    ticket: Ticket
}