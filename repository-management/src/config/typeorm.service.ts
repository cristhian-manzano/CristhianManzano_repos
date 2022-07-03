import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { URLSearchParams } from 'url';

@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private config: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    const databaseUrl = this.config.get<string>('DATABASE_URL');
    const urlParams = new URLSearchParams(databaseUrl);

    return {
      type: 'cockroachdb',
      url: databaseUrl,
      ssl: true,
      extra: { options: urlParams.get('options') },
      entities: [],
    };
  }
}
