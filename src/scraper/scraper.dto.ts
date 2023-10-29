import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class MetadataDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  image: string;
}

export class urlDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  url: string;
}
