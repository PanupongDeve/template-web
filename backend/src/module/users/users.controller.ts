import { Controller, Get, Post, Req, Request, HttpCode, Param, Put, Patch, Body, Delete, Query } from '@nestjs/common';
import { userUseCase } from '../../core/useCases/users/userUseCase';
import { messagerUseCase } from '../../core/useCases/MessagerUseCase';

@Controller('v1/users')
export class UsersController {
    constructor() {}

    @Post('/register')
    async register(@Body() body) {
        const data = userUseCase.register(body)
        return data;
    }  
}