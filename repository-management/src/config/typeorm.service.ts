import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { URLSearchParams } from 'url';
import { Organization } from '../entities/organization.entity';
import { Tribe } from '../entities/tribe.entity';
import { Repository } from '../entities/repository.entity';
import { Metric } from '../entities/metrics.entity';

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
      entities: [Organization, Tribe, Repository, Metric],
    };
  }
}
