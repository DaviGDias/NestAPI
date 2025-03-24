import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class AuthService {

    constructor(private prismaService: PrismaService){}
    
    async signup(data: SignupDTO){
       const userAlreadyExists =  await this.prismaService.user.findUnique({
            where:{
                email: data.email
            }
        })

        if(userAlreadyExists){
            throw new UnauthorizedException('User already exist')
        }
        const hashdPassword = await bcrypt.hash(data.password, 10)

        const user = await this.prismaService.user.create({
            data: {
                ...data,
                password: hashdPassword
            }
        })
        
        return {
            id: user.id,
            email: user.email,
            name: user.name
        }
    }

    async signin(data: SigninDTO){
        console.log(data)
        return 'signin'
    }
}
