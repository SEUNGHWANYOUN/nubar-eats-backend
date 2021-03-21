
import { Args, Query, Resolver } from "@nestjs/graphql";
import { query } from "express";
import { Restaurant } from "./entities/restaurant.entitiy";


@Resolver(of => Restaurant)
export class RestaurantsResolver{
    @Query(retruns => [Restaurant])
    restaurants(@Args('veganonly') veganonly : String ) : Restaurant[] {
        console.log(veganonly)
        return [];
    }

}