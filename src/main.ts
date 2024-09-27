import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { ResponseInterceptor } from './common/interceptors/response.interceptor';
import { globalValidationPipes } from './common/pipes/global.pipes';
import { HttpErrorFilter } from './common/filters/error.filter';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors();
  const dataSource = app.get(DataSource);
  app.useGlobalPipes(globalValidationPipes);
  app.useGlobalInterceptors(new ResponseInterceptor());
  app.useGlobalFilters(new HttpErrorFilter());
  const config = new DocumentBuilder()
    .setTitle('API Library')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('users')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);

  if (dataSource.isInitialized) {
    console.log('Conexión a la base de datos exitosa');
  } else {
    console.error('Error: La conexión a la base de datos no fue exitosa');
  }
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
