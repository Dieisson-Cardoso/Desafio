import { ApiProperty } from '@nestjs/swagger';

export default class FavoriteMoviesOutput {
  @ApiProperty()
  id: number;

  @ApiProperty()
  titulo: string;

  @ApiProperty()
  imagem: string;

  @ApiProperty()
  created_in: Date;

  @ApiProperty()
  updated_in: Date;

  @ApiProperty()
  user_id: number;
}
