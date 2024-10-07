import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { QuotesService } from './quotes.service';
import { AuthenticatedGuard } from 'src/lib/guards/authenticated.guard';

@Controller('quotes')
export class QuotesController {
  constructor(private readonly quotesService: QuotesService) { }

  @UseGuards(AuthenticatedGuard)
  @Get()
  async findOneKanyeQuote(@Request() req: any) {
    const quotes = await this.quotesService.findOneKanyeQuote();
    return { user: req.user.name, quotes: quotes.quote };
  }
}
