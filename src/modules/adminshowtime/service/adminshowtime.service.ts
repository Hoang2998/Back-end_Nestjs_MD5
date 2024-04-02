import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Adminshowtime } from "src/entities/adminshowtime.entity";
import { Repository } from "typeorm";

@Injectable()
export class AdminshowtimeService {
    constructor(
        @InjectRepository(Adminshowtime) private readonly adminshowtimeRepository: Repository<Adminshowtime>
    ) {}
    async addShowTime(item:any) {
        return await this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .insert()
        .into(Adminshowtime)
        .values(item)
        .execute();
        ;
    }

    async getAll() {
        const result = await this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .innerJoinAndSelect("adminshowtime.films", "Films")
        .innerJoinAndSelect("adminshowtime.room", "Room")
        .innerJoinAndSelect("adminshowtime.showtime", "Showtime")
        .orderBy("adminshowtime.idSetupFilm", "DESC")
        .getMany();

        return result
    }

    async checkShowTime(item:any) {
        console.log(item)
        const result = this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .select("adminshowtime")
        .andWhere("adminshowtime.room = :room", {room: item.room})
        .andWhere("adminshowtime.date_show = :date_show", {date_show: item.date})
        .execute();

        return result
    }

    async getfilmBuyTicket(id:number) {
        const result = await this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .innerJoinAndSelect("adminshowtime.films", "Films")
        .innerJoinAndSelect("adminshowtime.room", "Room")
        .innerJoinAndSelect("adminshowtime.showtime", "Showtime")
        .where("adminshowtime.films = :id", {id})
        .getMany();

        return result
    }
    async checkTicket(query:any) {
        console.log(query)
        const result = await this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .innerJoinAndSelect("adminshowtime.films", "Films")
        .innerJoinAndSelect("adminshowtime.room", "Room")
        .innerJoinAndSelect("adminshowtime.showtime", "Showtime")
        .where("adminshowtime.room = :room", {room: Number(query.idRoom)})
        .andWhere("adminshowtime.films = :films", {films: Number(query.idFilm)})
        .andWhere("adminshowtime.showtime = :showtime", {showtime: Number(query.idShowTime)})
        .getMany();

        return result
    }
    async getFilmTicket(id:number) {
        const result = await this.adminshowtimeRepository.createQueryBuilder('adminshowtime')
        .innerJoinAndSelect("adminshowtime.films", "Films")
        .innerJoinAndSelect("adminshowtime.room", "Room")
        .innerJoinAndSelect("adminshowtime.showtime", "Showtime")
        .where("adminshowtime.idSetupFilm = :id", {id})
        .getOne();

        return result
    }
}