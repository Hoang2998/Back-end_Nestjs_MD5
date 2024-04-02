import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Adminshowtime } from "./adminshowtime.entity";

@Entity("room")
export class Room {
    @PrimaryGeneratedColumn("increment")
    idRoom: number;
    @Column({
        type:"varchar",
        length: 10
    })
    nameRoom: string;

    @OneToMany(type => Adminshowtime, adminshowtime => adminshowtime.room)
    adminshowtime: Adminshowtime
}