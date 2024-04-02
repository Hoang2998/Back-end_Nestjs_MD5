import { Body, Controller, Get, Param, Post, Put, Request, Response, UseGuards } from "@nestjs/common";
import { UsersService } from "../service/users.service";
import { userDto } from "src/dtos/user.dto";
import { AuthGuard } from "src/guard/auth.guard";
import { response } from "express";
import { getUser } from "src/decorator/user.decorator";
import * as argon from 'argon2'



@Controller()
export class UsersController {
    constructor(
        private readonly usersService: UsersService
    ) {}

    @Post()
    // @UseGuards(AuthGuard)
    async createUser(@Body() user: userDto ,@Response() response:any) {
        const result = await this.usersService.createUser(user);
        response.send(result)
    }
    @Get("getUser")
    // @UseGuards(AuthGuard)
    async getAll(@Response() response: any,@Request() req: any,@getUser() user: any) {
        console.log(user)
        const result = await this.usersService.getAll();
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
    @Put("usersActive")

    async usersActive(@Body() body: any, @Response() response: any) {
        const result = await this.usersService.usersActive(body);
        response.status(200).json({
            data: result,
            message: "update success"
        });
    }
    @Get("account")
    @UseGuards(AuthGuard)
    async account(@Response() response: any,@Request() req: any,@getUser() user: any) {
        const result = await this.usersService.account(user.id);
        response.status(200).json({
            data: result,
            message: "success"
        })
    }
    @Put("updateUser/:id")

    async updateUser(@Body() body: any, @Response() response: any,@Param("id") id: number) {
        
        const result = await this.usersService.updateUser(id,body);
        response.status(200).json({
            data: result,
            message: "update success"
        });
    }
    @Put("checkPassword/:id")

    async checkPassword(@Body() body: any, @Response() response: any,@Param("id") id: number) {
        // const {id} = req.params
        const {password,newpassword,comfirmpassword} = body
        console.log(id)
        console.log(password,newpassword,comfirmpassword)
        try {
            const result = await this.usersService.checkPassword(Number(id))
            console.log(result.passwords)
            const check = await argon.verify(result.passwords,password)
            console.log(check)
            if(check){
                if(newpassword == comfirmpassword){
                    const hash = await argon.hash(newpassword)
                    const result = await this.usersService.updatePassword(hash,Number(id))
                    console.log(result)
                    return response.status(201).json({message:"update success"})
                }else{
                    return response.status(200).json({
                        message:"Xác nhận mật khẩu không đúng"
                    })

                }
            }
            return response.status(200).json({
                message:"Mật khẩu hiện tại không đúng"
            })
            // return res.status(200).json(
            //     {
            //         data:result,
            //         message:"Success"
            //     }
            // )
                
        } catch (error) {
            return response.status(500).json({message:"error server"})
            
        }
    }
}