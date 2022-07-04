import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { MetricsService } from './metrics.service';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get(':id')
  async getRepositoryMetrics(@Param('id', ParseIntPipe) id: number) {
    const tribeRepositories =
      await this.metricsService.getMetricRepositoryByTribe(id);

    const repositoriesInfo =
      await this.metricsService.getRepositoryVerificationCodes(
        tribeRepositories,
      );

    return { repositories: repositoriesInfo };
  }
}
