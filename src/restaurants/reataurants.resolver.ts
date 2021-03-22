
import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { query } from "express";
import { Restaurant } from "./entities/restaurant.entitiy";
import { CreateRestauransDTO } from "./dtos/creat-restaurans.dto";


@Resolver(of => Restaurant)
export class RestaurantsResolver{
    @Query(retruns => [Restaurant])
    restaurants(@Args('veganonly') veganonly : String ) : Restaurant[] {
        console.log(veganonly)
        return [];
    }

    @Mutation(retrun => Boolean)
    creatRestaun(
        @Args() CreateRestaunInput : CreateRestauransDTO
    ): boolean {
        console.log(CreateRestauransDTO);
        return true;
    } 

}