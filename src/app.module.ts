import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
;
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({

  //root 모튤 설정
  imports: [GraphQLModule.forRoot({


    autoSchemaFile: true,
  }), 
   RestaurantsModule],
  
  controllers: [],
  providers: [],
})
export class AppModule {}

