import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Response,
  StreamableFile,
} from '@nestjs/common';
import { parse } from 'json2csv';
import { Readable } from 'stream';

import { MetricsService } from './metrics.service';

@Controller('tribe')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get(':id/repository')
  async getRepositoryMetrics(@Param('id', ParseIntPipe) id: number) {
    const tribeRepositories =
      await this.metricsService.getMetricRepositoryByTribe(id);

    const repositoriesInfo =
      await this.metricsService.getRepositoryVerificationCodes(
        tribeRepositories,
      );

    return { repositories: repositoriesInfo };
  }

  @Get(':id/repository/file')
  async getRepositoryMetricsFile(
    @Param('id', ParseIntPipe) id: number,
    @Response({ passthrough: true }) res,
  ): Promise<StreamableFile> {
    const tribeRepositories =
      await this.metricsService.getMetricRepositoryByTribe(id);

    const repositoriesInfo =
      await this.metricsService.getRepositoryVerificationCodes(
        tribeRepositories,
      );

    const csv = parse(repositoriesInfo);
    const readable = Readable.from([csv]);

    res.set({
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="file.csv"',
    });

    return new StreamableFile(readable);
  }
}
