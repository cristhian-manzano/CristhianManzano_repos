import { Module } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { MetricsController } from './metrics.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Organization } from '../entities/organization.entity';
import { Tribe } from '../entities/tribe.entity';
import { Repository } from '../entities/repository.entity';
import { Metric } from '../entities/metrics.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Organization, Tribe, Repository, Metric]),
  ],
  controllers: [MetricsController],
  providers: [MetricsService],
})
export class MetricsModule {}
