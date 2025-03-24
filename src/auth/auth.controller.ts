import { Body, Controller, Post } from '@nestjs/common';
import { SigninDTO, SignupDTO } from './dtos/auth';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post('signup')
    async signup(@Body() body: SignupDTO) {
        console.log({body})
        return this.authService.signup(body)
    }

    @Post('signin')
    async signin(@Body() body: SigninDTO) {
        console.log({body})
        await this.authService.signin(body)
        return body
    }

    
}
