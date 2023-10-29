import { Injectable } from '@nestjs/common';
import { load } from 'cheerio';
import ApiService from 'src/helpers/api.helper';
import { IMetadata } from './scraper.interface';

@Injectable()
export class ScraperService {
  async getSiteMetadata(url: string): Promise<IMetadata> {
    const apiService = new ApiService(url);

    try {
      // Make a request to the specified URL
      const response = await apiService.get('');

      // Use Cheerio to scrape the metadata from the page
      const $ = load(`${response}`);

      // You'll need to adjust the selector to target the specific metadata you want
      const title = $('meta[property="og:title"]').attr('content') || null;
      const description =
        $('meta[property="og:description"]').attr('content') || null;
      const image = $('meta[property="og:image"]').attr('content') || null;

      const metadata = {
        title,
        description,
        image,
      };

      return metadata;
    } catch (error) {
      console.log(error);
      return;
    }
  }
}
