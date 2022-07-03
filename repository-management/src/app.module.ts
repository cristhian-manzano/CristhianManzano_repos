import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfigService } from './config/typeorm.service';
import { OrganizationManagementModule } from './organizationManagement/organizationManagement.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({ useClass: TypeOrmConfigService }),
    OrganizationManagementModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
