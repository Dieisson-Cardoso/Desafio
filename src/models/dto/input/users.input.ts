import { ApiProperty } from '@nestjs/swagger';

export default class UsersInput {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  nome: string;

  @ApiProperty()
  senha: string;

  @ApiProperty()
  ativo: boolean;
}
