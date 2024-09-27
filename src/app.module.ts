import { Module } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { DatabaseModule } from './database.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    DatabaseModule,
    AuthModule

  ],
  providers: [AuthService],
})
export class AppModule {}
