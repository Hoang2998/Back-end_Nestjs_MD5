import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";
import { Notification } from "./notification.entity";

@Entity("posts")
export class Posts {

    @PrimaryGeneratedColumn("increment")
    idPost: number;

    @Column({
        type:"varchar",
        length: 255
    })
    content: string;

    @Column({
        type:"timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    timePost: string;

    @Column({
        type:"longtext"
    })
    imagePost: string;
   
    @ManyToOne(type => Users, user => user.posts)
    @JoinColumn({ name: "idUser" })
    users: Users

    @OneToMany(type => Notification, ticket => ticket.idPost)
    notification: Notification
}