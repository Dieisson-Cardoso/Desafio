import { Injectable } from '@nestjs/common';

import FavoriteMoviesEntity from '../entities/favoriteMovies.entity';
import FavoriteMoviesOutput from '../dto/output/favoriteMovies.output';
import FavoriteMoviesInput from '../dto/input/favoriteMovies.input';

@Injectable()
export default class FavoriteMoviesConverter {
  inputToEntity(input: FavoriteMoviesInput, entity: FavoriteMoviesEntity) {
    entity.id = input.id;
    entity.titulo = input.titulo;
    entity.imagem = input.imagem;
    entity.created_in = new Date();
    entity.updated_in = new Date();
    entity.user_id = input.user_id;

    return entity;
  }

  entityToOutput(entity: FavoriteMoviesEntity): FavoriteMoviesOutput {
    const output = new FavoriteMoviesOutput();

    output.id = entity.id;
    output.titulo = entity.titulo;
    output.created_in = entity.created_in;
    output.updated_in = entity.updated_in;
    output.user_id = entity.user_id;

    return output;
  }
}

//output = DTO
