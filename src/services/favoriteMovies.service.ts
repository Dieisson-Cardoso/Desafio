import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

import FavoriteMoviesEntity from '../models/entities/favoriteMovies.entity';
import FavoriteMoviesConverter from '../models/converters/favoriteMovies.converter';
import FavoriteMoviesOutput from '../models/dto/output/favoriteMovies.output';
import FavoriteMoviesInput from '../models/dto/input/favoriteMovies.input';

@Injectable()
export class FavoriteMoviesService {
  constructor(
    @InjectRepository(FavoriteMoviesEntity)
    private readonly favoriteMoviesRepo: Repository<FavoriteMoviesEntity>,
    private readonly favoriteMoviesConverter: FavoriteMoviesConverter,
  ) {}

  async findAll(): Promise<FavoriteMoviesOutput[]> {
    const favoriteMoviesEntities = await this.favoriteMoviesRepo.find();

    const outputList = favoriteMoviesEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async save(input: FavoriteMoviesInput) {
    const entity = new FavoriteMoviesEntity();

    const convertedEntity = this.favoriteMoviesConverter.inputToEntity(
      input,
      entity,
    );

    const savedEntity = await this.favoriteMoviesRepo.save(convertedEntity);

    const output = this.favoriteMoviesConverter.entityToOutput(savedEntity);

    return output;
  }

  async findByUser(user_id: number): Promise<FavoriteMoviesOutput[]> {
    const favoriteMoviesEntities: FavoriteMoviesEntity[] =
      await this.favoriteMoviesRepo.find({
        where: { user_id },
      });

    const outputList = favoriteMoviesEntities.map((entity) => {
      return this.favoriteMoviesConverter.entityToOutput(entity);
    });

    return outputList;
  }

  async remove(id: number) {
    const favoriteMoviesEntity: FavoriteMoviesEntity =
      await this.favoriteMoviesRepo.findOne({
        where: { id },
      });

    this.favoriteMoviesRepo.remove(favoriteMoviesEntity);
  }

  post(favoriteMovie: FavoriteMoviesEntity) {
    this.favoriteMoviesRepo.create(favoriteMovie);
  }
}
