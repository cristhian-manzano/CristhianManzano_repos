import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Tribe } from 'src/entities/tribe.entity';
import { Repository } from 'typeorm';
import { TribeRepository } from './interfaces/tribeRepository';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { REPOSITORY } from 'src/common/constants';

@Injectable()
export class MetricsService {
  constructor(
    @InjectRepository(Tribe)
    private tribe: Repository<Tribe>,
    private readonly httpService: HttpService,
    private config: ConfigService,
  ) {}

  async getMetricRepositoryByTribe(idTribe: number): Promise<Tribe> {
    const tribeRepositories = await this.tribe
      .createQueryBuilder('tribe')
      .innerJoinAndSelect('tribe.organization', 'organization')
      .leftJoinAndSelect(
        'tribe.repositories',
        'repository',
        'repository.state = :state AND extract(YEAR from repository.create_time) = :date',
        { state: 'E', date: new Date().getFullYear() },
      )
      .leftJoinAndSelect(
        'repository.metric',
        'metrics',
        'metrics.coverage > :percentage',
        { percentage: 75 },
      )
      .where('tribe.id_tribe = :id', { id: idTribe })
      .getOne();

    if (!tribeRepositories)
      throw new NotFoundException('La Tribu no se encuentra registrada');

    // Get repositories that have metrics with minim coverage allowed
    const tribeRepositoriesWithMinCoverage =
      tribeRepositories.repositories.filter((repository) => repository.metric);

    if (tribeRepositoriesWithMinCoverage.length === 0) {
      throw new NotFoundException(
        'La Tribu no tiene repositorios que cumplan con la cobertura necesaria.',
      );
    }

    tribeRepositories.repositories = tribeRepositoriesWithMinCoverage;

    return tribeRepositories;
  }

  async getRepositoryVerificationCodes(
    tribe: Tribe,
  ): Promise<TribeRepository[]> {
    const idsRepositories = tribe.repositories.map(
      (repository) => repository.id_repository,
    );

    const { data } = await this.getVerificationStatusRepositories(
      idsRepositories,
    );

    return tribe.repositories.map((tribeRepository) => {
      const state = data?.repositories.find(
        (repository) => repository?.id,
      ).state;

      return {
        id: tribeRepository.id_repository,
        name: tribeRepository.name,
        tribe: tribe.name,
        organization: tribe.organization.name,
        coverage: `%${tribeRepository.metric.coverage}`,
        codeSmells: tribeRepository.metric.code_smells,
        bugs: tribeRepository.metric.bugs,
        vulnerabilities: tribeRepository.metric.vulnerabilities,
        hotspots: tribeRepository.metric.hotspot,
        verificationState: REPOSITORY.VERIFICATION_STATE[state],
        state: REPOSITORY.STATE[tribeRepository.state],
      };
    });
  }

  async getVerificationStatusRepositories(idRepositories: number[]) {
    const repositoriesVerificationApiUrl =
      this.config.get<string>('MOCK_SERVICE_URL');

    return this.httpService.axiosRef.get(repositoriesVerificationApiUrl, {
      params: { ids: JSON.stringify(idRepositories) },
    });
  }
}
