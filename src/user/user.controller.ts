/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
    @Get()
    async getAllUsers(){
        return JSON.stringify({ teste: 'teste' });
    }
}
