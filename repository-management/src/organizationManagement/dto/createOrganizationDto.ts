import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsNumber()
  public status: number;
}
