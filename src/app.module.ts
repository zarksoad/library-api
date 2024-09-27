import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from './database.module';
import { AuthModule } from './auth/auth.module';
import { AppInitializer } from './app.initializer';
import { JwtStrategy } from './auth/strategies/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { RoleService } from './auth/services/insert/role-insert.service';
import { InsertUserService } from './auth/services/insert/user-insert.service';
import { CheckUserExistService, GenerateToken, LoginService, MatchPassword } from './auth/services/login';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './auth/entities';
import { JwtService } from '@nestjs/jwt';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User]),
    ConfigModule.forRoot({ isGlobal: true }), 
    DatabaseModule,
    AuthModule,
    BookModule

  ],
  providers: [JwtStrategy,AuthService, AppInitializer,RoleService,InsertUserService,LoginService,MatchPassword,CheckUserExistService,GenerateToken,JwtService],
})
export class AppModule {}
