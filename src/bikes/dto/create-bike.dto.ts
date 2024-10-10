import { ApiProperty } from '@nestjs/swagger';

export class CreateBikeDto {
  @ApiProperty({
    example: 'Royal Enfield',
    description: 'The make of the bike',
  })
  make: string;

  @ApiProperty({
    example: 'Classic 350',
    description: 'The model of the bike',
  })
  model: string;

  @ApiProperty({
    example: 2021,
    description: 'The manufacturing year of the bike',
  })
  year: number;

  @ApiProperty({
    example: 'Cruiser',
    description: 'The type of bike, e.g., Cruiser, Sport, etc.',
  })
  type: string;
}
