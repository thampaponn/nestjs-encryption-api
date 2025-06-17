import { ApiProperty } from '@nestjs/swagger';
import { IsString, Length } from 'class-validator';

export class EncryptDto {
  @ApiProperty()
  @IsString()
  @Length(1, 2000)
  payload: string;
}
