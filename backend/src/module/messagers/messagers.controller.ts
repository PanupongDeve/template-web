import { Controller, Get, Query, Post, Body, Param } from '@nestjs/common';
import { messagerUseCase } from '../../core/useCases/MessagerUseCase';

@Controller('v1/messagers')
export class MessagersController {
    @Get()
    async getAll(@Query() query) {
        const data = await messagerUseCase.getMessagers(query);
        return data;
    }

    @Post('/create')
    async create(@Body() body) {
        const data = await messagerUseCase.createMessager(body);
        return data;
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        const data = await messagerUseCase.getMessagerById(id);
        return data;
    }
}
