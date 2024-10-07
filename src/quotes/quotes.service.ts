import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class QuotesService {
  constructor(private readonly httpService: HttpService) { }

  async findOneKanyeQuote() {
    // return this.httpService.get('https://api.kanye.rest/');
    return this.httpService.axiosRef
      .get(`https://api.kanye.rest/`)
      // .get(`https://api.restful-api.dev/objects`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(
          err?.message + ': ' + JSON.stringify(err?.response?.data),
        );
      });
  }
}
