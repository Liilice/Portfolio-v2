import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Portfolio')
    .setDescription('Portfolio API description')
    .setVersion('1.0')
    .addTag('portfolio')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);

  app.enableCors({
    origin: true,                     
    credentials: true,         
  });

  await app.listen(process.env.PORT ?? 3000);

}
bootstrap();
