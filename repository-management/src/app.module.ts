import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.service';
import { OrganizationManagementModule } from './organizationManagement/organizationManagement.module';
import { MetricsModule } from './metrics/metrics.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    OrganizationManagementModule,
    MetricsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
