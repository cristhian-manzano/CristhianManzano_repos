import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'metrics' })
export class Metrics {
  @PrimaryGeneratedColumn()
  id_repository: number;

  @Column()
  coverage: number;

  @Column()
  bugs: number;

  @Column()
  vulnerabilities: number;

  @Column()
  hotspot: number;

  @Column()
  code_smells: number;
}
