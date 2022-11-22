import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  imagem: string;

  @ApiProperty()
  user_id: number;
}
