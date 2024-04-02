import { Column, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categoryforfilms } from "./categoryforfilm.entity";

@Entity("categoryfilm")
export class Category {
   @PrimaryGeneratedColumn("increment")
   idCategory: number;

   @Column({
       type:"varchar",
       length: 255
   })
   name: string;

   @Column({
       type:"tinyint",
   })
   status: number;
   @OneToMany(type => Categoryforfilms, Categoryforfilms => Categoryforfilms.category)
   categoryforfilms: Categoryforfilms[]
}