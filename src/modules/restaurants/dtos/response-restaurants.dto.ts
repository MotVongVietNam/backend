import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { Type } from 'class-transformer';

export class RestaurantsResponseDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: Date })
  created_at: Date;

  @ApiResponseProperty({ type: Date })
  updated_at: Date;

  @ApiResponseProperty({ type: Date })
  deleted_at: Date;

  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: String })
  description: string;

  @ApiResponseProperty({ type: String })
  image: string;

  @ApiResponseProperty({ type: String })
  address: string;

  @ApiResponseProperty({ type: Number })
  latitude: number;

  @ApiResponseProperty({ type: Number })
  longitude: number;

  @ApiResponseProperty({ type: Number })
  rating: number;

  @ApiPropertyOptional({ type: String })
  phone?: string;

  @ApiPropertyOptional({ type: String })
  website?: string;

  @ApiResponseProperty({ type: String })
  feedbacks: string;

  @ApiResponseProperty({ type: String })
  dishes: string;
}

export class FavoriteRestaurantsResponseDto {
  @ApiResponseProperty({ type: Number })
  id: number;

  @ApiResponseProperty({ type: String })
  name: string;

  @ApiResponseProperty({ type: String })
  description: string;

  @ApiResponseProperty({ type: String })
  image: string;

  @ApiResponseProperty({ type: String })
  address: string;

  @ApiResponseProperty({ type: Number })
  rating: number;

  @ApiPropertyOptional({ type: String })
  phone?: string;

  @ApiPropertyOptional({ type: String })
  website?: string;
}

export class GetManyFavoriteRestaurantsResponseDto {
  @ApiProperty({ type: FavoriteRestaurantsResponseDto, isArray: true })
  @Type(() => FavoriteRestaurantsResponseDto)
  data: FavoriteRestaurantsResponseDto[];
}
