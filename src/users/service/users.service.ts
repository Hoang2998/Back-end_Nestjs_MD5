import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { userDto } from "src/dtos/user.dto";
import { Users } from "src/entities/users.entity";
import { Repository } from "typeorm";
import * as argon2 from "argon2";


@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users) private readonly usersRepository: Repository<Users>,
    ) {}

    async createUser(user: userDto) { 
        const {passwords} = user;
        const hash = await argon2.hash(passwords);
        user.passwords = hash
        this.usersRepository.createQueryBuilder('user')
        .insert()
        .values(user)
        .execute();
        return "create user success"
    }

    async getEmail(email: string) {
        console.log(email)
        const result = await this.usersRepository.findOne({
            where: {email}})
        console.log(result)
        return result
    }

    async getAll() {
        const result = await this.usersRepository.find();
        return result
    }

    async usersActive(body: any) {
        const result = await this.usersRepository.createQueryBuilder('user')
        .update()
        .set({active: body.active})
        .where("idUser = :idUser", {idUser: body.id})
        .execute();
        const result1 = await this.usersRepository.find();
        return result1
    }

    async account(id: number) {
        const result = await this.usersRepository.findOne({
            where: {idUser: id}
        })
        return result
    }

    async updateUser(id:number,body: any) {
        console.log(body)
        const result = await this.usersRepository.createQueryBuilder('user')
        .update()
        .set(body)
        .where("idUser = :idUser", {idUser: id})
        .execute();
        const result1 = await this.usersRepository.find();
        return result1
    }

    async checkPassword(id: number) {
        const result = await this.usersRepository.createQueryBuilder('user')
        .where("user.idUser = :idUser", {idUser: id})
        .getOne();
        return result
    }
    async updatePassword(newpassword: string,id: number) {
        console.log(newpassword,id)
        const update = await this.usersRepository.createQueryBuilder('user')
        .update()
        .set({passwords: newpassword})
        .where("idUser = :idUser", {idUser: id})
        .execute();
        // const result = await this.usersRepository.find();
        return update
    }
}