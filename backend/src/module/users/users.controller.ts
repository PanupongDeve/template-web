import { Controller, Get, Post, Req, Request, HttpCode, Param, Put, Patch, Body, Delete } from '@nestjs/common';
import  { firebaseAdmin  } from '../../core/services/firebaseAdmin/FirebaseAdmin';
import { userUseCase } from '../../core/useCases/users/userUseCase';

@Controller('v1/users')
export class UsersController {
    constructor() {}

    @Post('/register')
    async register(@Body() body) {
        const data = userUseCase.register(body)
        return data;
    }
}