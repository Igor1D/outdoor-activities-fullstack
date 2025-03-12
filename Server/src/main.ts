import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors() //it allows a web page to access restricted resources from a server on a domain different than the domain that served the web page.
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
