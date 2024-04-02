import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./room.entity";
import { Showtime } from "./showtime.entity";
import { Films } from "./films.entity";
import { Ticket } from "./ticket.entity";

@Entity("adminshowtime")
export class Adminshowtime {
    @PrimaryGeneratedColumn("increment")
    idSetupFilm: number;

    @Column({
        type:"varchar",
        length: 50
    })
    date_show: string;

    @Column({
        type:"varchar",
        length: 50
    })
    duration: string;

    @ManyToOne(type => Room, room => room.adminshowtime)
    @JoinColumn({ name: "idRoom" })
    room: Room;

    @ManyToOne(type => Showtime, showtime => showtime.adminshowtime)
    @JoinColumn({ name: "idShowTime" })
    showtime: Showtime;

    @ManyToOne(type => Films, films => films.adminshowtime)
    @JoinColumn({ name: "idFilm" })
    films: Films;

    @OneToMany(type => Ticket, ticket => ticket.adminshowtime)
    ticket: Ticket
}