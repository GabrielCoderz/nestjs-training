import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ // ValidationPipe permite validar as informações do payload (requisição do body)
    whitelist: true, // não irá receber parâmetros que não estejam no DTO (somente os listados)
    forbidNonWhitelisted: true, // NÃO PERMITE ENVIO NÃO LISTADO NO DTO
    transform: true, // Valida pela tipagem criada no DTO
  }));
  await app.listen(3000);
}
bootstrap();
