import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { globalValidationPipes } from './common/pipes/global.pipes';
import { HttpErrorFilter } from './common/filters/error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  const dataSource = app.get(DataSource);
  app.useGlobalPipes(globalValidationPipes);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpErrorFilter());
  if (dataSource.isInitialized) {
    console.log('Conexión a la base de datos exitosa');
  } else {
    console.error('Error: La conexión a la base de datos no fue exitosa');
  }
  await app.listen(3000);
}
bootstrap();
