import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  ValidationPipe,
  ValidationError,
  BadRequestException,
} from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev')); // 'combined', 'common', 'dev', 'tiny'

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidUnknownValues: true,
      stopAtFirstError: true,
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        const messages = errors.map((error) => {
          return {
            [`${error.property}`]: {
              error: `${error.property} has wrong value ${error.value}.`,
              message: Object.values(error.constraints).join(''),
            },
          };
        });

        const errorResponse = {
          statusCode: 400,
          error: 'Bad Request',
          message: messages,
        };
        return new BadRequestException(errorResponse);
      },
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('URL Metadata Scraper API')
    .setDescription(
      'An API that accepts a URL and scrapes the web page for metadata like title, description, and image thumbnail. Users can use this API to generate previews of web links.',
    )
    .setVersion('1.0')
    .addTag('Scraper')
    // .addBearerAuth(
    //   { type: 'http', scheme: 'bearer', bearerFormat: 'JWT' },
    //   'jwt',
    // )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}
bootstrap();
