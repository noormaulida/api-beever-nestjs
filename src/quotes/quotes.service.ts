import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

@Injectable()
export class QuotesService {
  constructor(private readonly httpService: HttpService) { }

  async findOneKanyeQuote() {
    return this.httpService.axiosRef
      .get(`https://api.kanye.rest/`)
      .then((res) => res.data)
      .catch((err) => {
        throw new Error(
          err?.message + ': ' + JSON.stringify(err?.response?.data),
        );
      });
  }
}
