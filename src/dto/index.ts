import { HttpStatus } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseDto<T> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  status: HttpStatus.OK;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: 'Successful!';

  @ApiProperty()
  @IsNotEmpty()
  data: T | T[];
}
