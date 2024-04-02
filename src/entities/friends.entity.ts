import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Users } from "./users.entity";

@Entity("friends")
export class Friends {

    @PrimaryGeneratedColumn("increment")
    idFriends: number;

    @Column(
        {
            type: "int",
            default:0
        }
    )
    status: number;
    @Column({
        type: "int"
    })
    room: string;

    @ManyToOne(type => Users, user => user.friends)
    @JoinColumn({ name: "idSend" })
    idSend: Users;

    @ManyToOne(type => Users, user => user.friendsGive)
    @JoinColumn({ name: "idGive" })
    idGive: Users;
}
