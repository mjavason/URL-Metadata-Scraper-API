import {
  Controller,
  Get,
  Query,
  NotFoundException,
  HttpStatus,
} from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { SuccessResponse } from 'src/helpers/response.helper';
import { urlDto } from './scraper.dto';
import { ResponseData } from 'src/interfaces/response.interface';
import { IMetadata } from './scraper.interface';
import { ResponseDto } from 'src/dto';

@Controller('scraper')
@ApiTags('Scraper')
@ApiResponse({
  status: HttpStatus.OK,
  type: ResponseDto,
  description: 'Successful response with data',
})
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get()
  @ApiOperation({
    summary: 'Get site metadata including title, image and description',
  })
  //   @ApiQuery({ type: urlDto }) // Define the query parameters
  async getMetadata(@Query() query: urlDto): Promise<ResponseData<IMetadata>> {
    const metadata = await this.scraperService.getSiteMetadata(query.url);

    if (!metadata)
      throw new NotFoundException('Metadata not found for the specified URL.');

    return SuccessResponse(metadata);
  }
}
