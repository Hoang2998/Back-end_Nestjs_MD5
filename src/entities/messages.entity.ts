import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";

@Entity("messages")
export class Messages { 
    @PrimaryGeneratedColumn("increment")
    idMessage: number;

    @Column({
        type:"varchar",
        length: 255
    })
    contents: string;

    @Column({
        type:"varchar",
        length: 255
    })
    room: string;
    @Column({
        type:"timestamp",
        default: () => "CURRENT_TIMESTAMP"
    })
    timeSend: string;

    @Column({
        type:"int",
        default: 0
    })
    readed: number;

    
    @ManyToOne(type => Users, user => user.friends)
    @JoinColumn({ name: "idSend" })
    idSend: Users;

    @ManyToOne(type => Users, user => user.friendsGive)
    @JoinColumn({ name: "idGive" })
    idGive: Users;
}