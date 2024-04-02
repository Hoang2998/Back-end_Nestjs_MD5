import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Chair } from "./chair.entity";
import { Adminshowtime } from "./adminshowtime.entity";

@Entity("ticket")
export class Ticket {
    @PrimaryGeneratedColumn("increment")
    idTicket: number;

    @Column({
        type:"varchar",
        length: 50
    })
    dateBuy: string;

    @Column({
        type:"varchar",
        length: 100
    })
    price: string;

    @ManyToOne(type => Users, user => user.ticket)
    @JoinColumn({ name: "idUser" })
    users: Users

    @ManyToOne(type => Chair, chair => chair.ticket)
    @JoinColumn({ name: "idChair" })
    chair: Chair

    @ManyToOne(type => Adminshowtime, adminshowtime => adminshowtime.ticket)
    @JoinColumn({ name: "idAdminshowtime" })
    adminshowtime: Adminshowtime

}