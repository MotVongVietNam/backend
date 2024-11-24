import { ApiProperty } from '@dataui/crud/lib/crud';
import { Type } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateRestaurantFeedbacksDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  comment: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  image: string;

  @ApiProperty({ type: Number })
  @IsNotEmpty()
  @Type(() => Number)
  rating: number;
}

export class CreateRestaurantFeedBacksDto extends UpdateRestaurantFeedbacksDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ type: String })
  username: string;
}
