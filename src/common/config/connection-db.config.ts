
import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { EnvConfig } from './env.config';
import { Role, User } from 'src/auth/entities';
import { Book } from 'src/book/entities/book.entity';


@Injectable()
export class DatabaseConfigService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    const envConfig = EnvConfig();
    return {
      type: 'postgres',
      host: envConfig.host,
      port: envConfig.port,
      username: envConfig.usernameDb,
      password: envConfig.password,
      database: envConfig.database,
      entities: [User, Role,Book],
      autoLoadEntities: true,
      synchronize: true, 
      logging: true,
      logger: 'advanced-console', 
    };
  }
}
