import { SigninDTO, SignupDTO } from './dtos/auth';
import { PrismaService } from '../prisma/prisma.service';
export declare class AuthService {
    private prismaService;
    constructor(prismaService: PrismaService);
    signup(data: SignupDTO): Promise<{
        id: number;
        email: string;
        name: string;
    }>;
    signin(data: SigninDTO): Promise<string>;
}
