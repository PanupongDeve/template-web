import { Controller, Get, Post, Req, Request, HttpCode, Param, Put, Patch, Body, Delete, Query } from '@nestjs/common';
import { userUseCase } from '../../core/useCases/users/userUseCase';
import { MessagerEntityFirebase } from '../../core//entities/messagers/MessagerEntity';

@Controller('v1/users')
export class UsersController {
    constructor() {}

    @Post('/register')
    async register(@Body() body) {
        const data = userUseCase.register(body)
        return data;
    }

    @Post('/test')
    async test(@Body() body, @Query() query) {
        const messagerEntity = new MessagerEntityFirebase();
        //  await messagerEntity.createMessager(body);
         const responseData  = await messagerEntity.getMessagers(query);
        return responseData;
    }

  
}