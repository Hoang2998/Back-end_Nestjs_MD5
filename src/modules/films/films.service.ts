import { Injectable } from "@nestjs/common";
import { InjectEntityManager, InjectRepository } from "@nestjs/typeorm";
import { Categoryforfilms } from "src/entities/categoryforfilm.entity";

import { Films } from "src/entities/films.entity";
import { EntityManager, Repository } from "typeorm";

@Injectable()
export class FilmsService {
    constructor(
        @InjectRepository(Films) private readonly filmsRepository: Repository<Films>,
        @InjectRepository(Categoryforfilms) private readonly categoryforfilmsRepository: Repository<Categoryforfilms>,
        @InjectEntityManager() private readonly entityManager: EntityManager
    ) {}

    async getAll() {
        const result = await this.filmsRepository.find()
        // console.log(result)
        return result
    }

    async addFilm(film: any) {
        console.log(film)
        console.log(film.arrCategory)
       await this.entityManager.transaction(async (transactionalEntityManager) => {
           
        const newFilm = await transactionalEntityManager.create(Films, film.film);
        await transactionalEntityManager.save(newFilm);
        console.log(newFilm.idFilm)
        
        
      Promise.all(film.arrCategory.map(async (item) => {
        const newCate = await transactionalEntityManager.create(Categoryforfilms, {
            films: newFilm.idFilm as any,
            category: item
        });
         await transactionalEntityManager.save(newCate);
      }))  
    })
    const result = await this.filmsRepository.find();
    return result
    }

    async getFilmUpdate(id: number) {
        const result = await this.filmsRepository.createQueryBuilder('films')
        .innerJoinAndSelect("films.categoryforfilms", "Categoryforfilms")
        .innerJoinAndSelect("Categoryforfilms.category", "Category")
        .where("films.idFilm = :id", {id})
        .getOne()
        return result
    }

    async updateFilm(id: number, film: any) {
        // console.log(id, film)
        const result = await this.filmsRepository.createQueryBuilder('films')
        .update()
        .set(film)
        .where("films.idFilm = :id", {id})
        .execute();
        const result1 = await this.filmsRepository.find();
        return result1
    }
    async deletefilm(id: number) {
        const result2 = this.categoryforfilmsRepository.createQueryBuilder('categoryforfilms')
        .delete()
        .from(Categoryforfilms)
        .where("films = :id", {id})
        .execute();
        
        const result = await this.filmsRepository.createQueryBuilder('films')
        .delete()
        .from(Films)
        .where("idFilm = :id", {id})
        .execute();
        const result1 = await this.filmsRepository.find();
        return result1
    }
   async sortASCFilms() {
    const result = await this.filmsRepository.createQueryBuilder('films')
    .orderBy("films.releaseDate", "ASC")
    .getMany();
    return result
   }
   async sortDESCFilms() {
    const result = await this.filmsRepository.createQueryBuilder('films')
    .orderBy("films.releaseDate", "DESC")
    .getMany();
    return result
   }
   async findFilm(query: any) {
    console.log(query.nameFilm)
    const result = await this.filmsRepository.createQueryBuilder('films')
    .select("films")
    .where("films.nameFilm like :nameFilm", {nameFilm: `%${query.nameFilm}%`})
    .getMany();
    return result
   }
}