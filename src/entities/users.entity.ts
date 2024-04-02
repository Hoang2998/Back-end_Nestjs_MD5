import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Posts } from "./posts.entity";
import { Ticket } from "./ticket.entity";
import { Friends } from "./friends.entity";
import { Comments } from "./comments.entity";


@Entity("users")
export class Users {
    @PrimaryGeneratedColumn("increment")
    idUser: number;

    @Column({
        type:"tinyint",
        default: 0
    })
    role: number;

    @Column({
        type:"varchar",
        length: 255
    })
    nameUser: string;

    @Column({
        type:"varchar",
        length: 255,
        unique: true
    })
    email: string;

    @Column({
        type:"varchar",
        length: 255
    })
    passwords: string;

    @Column({
        type:"longtext",
        default: null
    })
    avatar: string;

    @Column({
        type:"tinyint",
        default: 1
    })
    active: number;

    @Column({
        type:"varchar",
        length: 255,
        default: null
    })
    phoneNumber: string;

    @OneToMany(type => Posts, post => post.users)
    posts: Posts

    @OneToMany(type => Ticket, ticket => ticket.users)
    ticket: Ticket

    @OneToMany(type => Friends, ticket => ticket.idSend)
    friends: Friends

    @OneToMany(type => Friends, ticket => ticket.idGive)
    friendsGive: Friends

    @OneToMany(type => Comments, comments => comments.users)
    comments: Comments
}