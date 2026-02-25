import { IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class CreatePriceDto {
  @IsOptional() @IsNumber()
  rent?: number;

  @IsOptional() @IsNumber()
  maintenance?: number;

  @IsOptional() @IsNumber()
  deposit?: number;

  @IsOptional() @IsBoolean()
  rentNegotiable?: boolean;
}