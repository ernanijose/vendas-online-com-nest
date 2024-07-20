/* eslint-disable prettier/prettier */
import { UserService } from './user.service';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){

    }

    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }

    @Post()    
    async createUser(
        @Body() createUserDto: CreateUserDto
    ): Promise<User>{
        return this.userService.createUser(createUserDto);
    }
}
