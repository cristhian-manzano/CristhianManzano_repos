import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { Organization } from '../entities/organization.entity';
import { Tribe } from '../entities/tribe.entity';
import { Repository } from '../entities/repository.entity';
import { Metric } from '../entities/metrics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Tribe, Repository, Metric]),
    HttpModule,
  ],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
