import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';

@Injectable()
export class AuthenticatedGuard implements CanActivate {
  constructor(private jwtService: JwtService) { }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(
        token,
        {
          secret: "-----BEGIN PRIVATE KEY----- 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 G4s+sqox1AG2CR0AV4C2X9ioT2GJlw== -----END PRIVATE KEY-----",
        }
      );
      request['user'] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }
}