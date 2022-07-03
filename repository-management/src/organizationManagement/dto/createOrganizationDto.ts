import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateOrganizationDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  // Validates for an integer
  @IsNumber()
  public status: number;
}
