import { Controller, Get, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { ResponseDto } from './dto';
import { SuccessMsgResponse } from './helpers/response.helper';

@Controller()
@ApiResponse({
  status: HttpStatus.OK,
  type: ResponseDto,
  description: 'Successful response with data',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Default API health route' }) // Add an API operation summary
  getHello() {
    return SuccessMsgResponse('API is live!!!');
  }
}
