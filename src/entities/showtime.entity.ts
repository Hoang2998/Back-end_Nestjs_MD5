import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Adminshowtime } from "./adminshowtime.entity";

@Entity("showtime")
export class Showtime {
    @PrimaryGeneratedColumn("increment")
    idTime: number;

    @Column({
        type:"varchar",
        length: 50
    })
    showTimeAt: string;   

    @OneToMany(type => Adminshowtime, adminshowtime => adminshowtime.showtime)
    adminshowtime: Adminshowtime
}