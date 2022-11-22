import { Controller, Get, Param, Delete, Post, Body } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse } from '@nestjs/swagger';
import FavoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';
import { FavoriteMoviesService } from '../services/favoriteMovies.service';
import FavoriteMoviesInput from '../models/dto/input/favoriteMovies.input';

@ApiTags('FavoriteMovies')
@Controller('favoriteMovies')
export class FavoriteMoviesController {
  constructor(private readonly favoriteMoviesService: FavoriteMoviesService) {}

  @Get()
  @ApiCreatedResponse({ type: FavoriteMoviesOutput, isArray: true })
  findAll(): Promise<FavoriteMoviesOutput[]> {
    return this.favoriteMoviesService.findAll();
  }

  @Get(':user_id')
  @ApiCreatedResponse({ type: FavoriteMoviesOutput, isArray: true })
  findByUser(
    @Param('user_id') user_id: number,
  ): Promise<FavoriteMoviesOutput[]> {
    return this.favoriteMoviesService.findByUser(user_id);
  }

  @Post()
  save(@Body() input: FavoriteMoviesInput) {
    return this.favoriteMoviesService.save(input);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.favoriteMoviesService.remove(+id);
  }
}
