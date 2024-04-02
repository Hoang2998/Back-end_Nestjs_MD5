import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Posts } from "./posts.entity";

@Entity("notification")
export class Notification { 
    @PrimaryGeneratedColumn("increment")
    idNotice: number;

    @Column({
        type:"int",
        default:0
    })
    readed: number;

    @Column({
        type:"int",
    })
    status: number;

    @ManyToOne(type => Users, user => user.friends)
    @JoinColumn({ name: "idSend" })
    idSend: Users;

    @ManyToOne(type => Users, user => user.friendsGive)
    @JoinColumn({ name: "idGive" })
    idGive: Users;

    @ManyToOne(type => Posts, post => post.notification)
    @JoinColumn({ name: "idPost" })
    idPost: Posts;
}