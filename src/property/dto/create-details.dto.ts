import { IsOptional, IsString, IsNumber, IsDateString } from 'class-validator';

export class CreateDetailsDto {
  @IsOptional() @IsString()
  propertyName?: string;

  @IsOptional() @IsString()
  category?: string;

  @IsOptional() @IsNumber()
  floor?: number;

  @IsOptional() @IsNumber()
  totalFloor?: number;

  @IsOptional() @IsString()
  description?: string;

  @IsOptional() @IsString()
  ownershipType?: string;

  @IsOptional() @IsNumber()
  builtUpArea?: number;

  @IsOptional() @IsString()
  propertyAge?: string;

  @IsOptional() @IsString()
  facing?: string;

  @IsOptional() @IsNumber()
  noticePeriod?: number;

  @IsOptional() @IsString()
  occupancy?: string;

  @IsOptional() @IsDateString()
  availableFrom?: string;

  @IsOptional() @IsString()
  location?: string;

  @IsOptional() @IsString()
  street?: string;

  @IsOptional() @IsString()
  locality?: string;

  @IsOptional() @IsString()
  landmark?: string;

  @IsOptional() @IsString()
  pincode?: string;
}