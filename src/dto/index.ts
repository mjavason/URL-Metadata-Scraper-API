import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class ResponseDto<T> {
  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  status: 200;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  message: 'Successful!';

  @ApiProperty()
  @IsNotEmpty()
  data: T | T[];
}
