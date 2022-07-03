import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configurations
  const configService = app.get(ConfigService);
  const port = configService.get('APP_PORT', 3000);

  await app.listen(port, () => {
    console.log(`Server running in port ${port}`);
  });
}
bootstrap();
