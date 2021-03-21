import { Module } from '@nestjs/common';
import { RestaurantsResolver } from './reataurants.resolver';

@Module({
    providers : [RestaurantsResolver],
})
export class RestaurantsModule {}
