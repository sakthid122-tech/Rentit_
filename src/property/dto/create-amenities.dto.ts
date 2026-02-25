import { IsOptional, IsString, IsBoolean } from 'class-validator';

export class CreateAmenitiesDto {
  @IsOptional() @IsString()
  parking?: string;

  @IsOptional() @IsBoolean()
  gateSecurity?: boolean;

  @IsOptional() @IsString()
  furnishing?: string;
}