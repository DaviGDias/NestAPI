import { SigninDTO, SignupDTO } from './dtos/auth';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(body: SignupDTO): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
    signin(body: SigninDTO): Promise<SigninDTO>;
}
